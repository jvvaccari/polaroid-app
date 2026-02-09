import { Box, Stack } from "@mui/material";
import ImageItem from "../../components/ImageItem";
import { useParams } from "react-router-dom";
import { resolveImageUrl } from "../../utils/resolveImageUrl";
import { useApp } from "../../hooks/useApp";
import { useEffect, useRef, useState } from "react";
import { polaroidService } from "../../services";
import { IPolaroid } from "../../interfaces/IPolaroid";

import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import BackContent from "./components/Polaroid/PolaroidBackContent";
import PolaroidForPdf from "./components/PolaroidForPdf";
import html2pdf from "html2pdf.js";
import HeaderActions from "./components/HeaderActions";

const ViewPolaroid = () => {
  const { handleMessage } = useApp();
  const pdfRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const [polaroid, setPolaroid] = useState<IPolaroid | null>(null);

  const handlePdf = () => {
    const element = pdfRef.current;
    if (!element) {
      handleMessage("Erro ao encontrar o elemento para gerar PDF", "error", {
        vertical: "top",
        horizontal: "center",
      });
      return;
    }

    const options = {
      filename: "polaroid.pdf",
      image: { type: "jpeg" as const, quality: 1.0 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      },
      jsPDF: {
        unit: "mm" as const,
        format: "a4" as const,
        orientation: "portrait" as const,
      },
    };

    html2pdf().set(options).from(element).save();

    handleMessage("PDF gerado com sucesso!", "success", {
      vertical: "top",
      horizontal: "center",
    });
  };

  useEffect(() => {
    const fetchPolaroid = async () => {
      if (!id) return;
      try {
        const pol = await polaroidService.getPolaroidById(id);
        if (!pol) return;
        setPolaroid(pol);
      } catch (e: unknown) {
        handleMessage("Erro ao carregar polaroid!\n\n" + e, "error", {
          vertical: "top",
          horizontal: "center",
        });
      }
    };

    fetchPolaroid();
  }, []);

  return (
    <Stack flex={1}>
      <HeaderActions
        onDelete={function (): void {
          throw new Error("Function not implemented.");
        }}
        onPdf={handlePdf}
      />
      {polaroid && (
        <Stack alignItems="center" justifyContent="center" flex={1}>
          <Polaroid
            faces={{
              front: (
                <CardCover
                  cover={
                    <ImageItem
                      src={resolveImageUrl(polaroid.imageUrl)}
                      alt={"Polaroid cover image"}
                    />
                  }
                />
              ),

              back: (
                <BackContent
                  content={polaroid.backContent}
                  isOnlyContent={true}
                />
              ),
            }}
          />
        </Stack>
      )}

      {polaroid && (
        <Box sx={{ position: "absolute", bottom: 0 }}>
          <Stack
            ref={pdfRef}
            style={{
              width: "100%",
              height: "fit-content",
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PolaroidForPdf
              imageUrl={resolveImageUrl(polaroid.imageUrl)}
              textContent={polaroid.backContent}
            />
          </Stack>
        </Box>
      )}
    </Stack>
  );
};

export default ViewPolaroid;

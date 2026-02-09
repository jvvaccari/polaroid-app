import { Box, Stack } from "@mui/material";
import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";
import PolaroidForPdf from "./components/PolaroidForPdf";
import { useState, useRef } from "react";
import { useApp } from "../../hooks/useApp";
import HeaderActions from "./components/HeaderActions";
// import { generatePolaroidPdf } from "./pdf/generator";
// import "./pdf/styles.css";

import html2pdf from "html2pdf.js";

const CreatePolaroid = () => {
  const [textContent, setTextContent] = useState("");
  const [clear, setClear] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const { handleMessage } = useApp();
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    if (!image) {
      handleMessage("Selecione uma imagem", "error", {
        vertical: "top",
        horizontal: "center",
      });
      return;
    }

    console.log("Texto: " + textContent + "\n\n" + "Imagem: " + image);
  };

  const handleDiscard = () => {
    setImage(null);
    setClear(true);
    handleMessage("Polaroid descartada", "info", {
      vertical: "top",
      horizontal: "center",
    });
  };

  const handlePdf = () => {
    if (!image) {
      handleMessage("Selecione uma imagem para gerar o PDF", "error", {
        vertical: "top",
        horizontal: "center",
      });
      return;
    }

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
        scale: 1,
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

  return (
    <Stack flex={1}>
      <HeaderActions
        onSave={handleSave}
        onDiscard={handleDiscard}
        onPdf={handlePdf}
      />
      <Stack alignItems="center" justifyContent="center" flex={1}>
        <Polaroid
          faces={{
            front: <CardCover imageFile={image} setImageFile={setImage} />,
            back: (
              <PolaroidForm
                clear={clear}
                setContent={(content) => setTextContent(content)}
              />
            ),
          }}
        />
      </Stack>
      <Box sx={{ position: "absolute", bottom: -3000 }}>
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
          <PolaroidForPdf imageFile={image} textContent={textContent} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default CreatePolaroid;

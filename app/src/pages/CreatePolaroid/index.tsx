import { Stack } from "@mui/material";
import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";
import { useState } from "react";
import { useApp } from "../../hooks/useApp";
import HeaderActions from "./components/HeaderActions";

const CreatePolaroid = () => {
  const [textContent, setTextContent] = useState("");
  const [clear, setClear] = useState(false)
  const [image, setImage] = useState<File | null>(null);
  const { handleMessage } = useApp();

  const handleSave = () => {
    if (!image) {
      handleMessage("Selecione uma imagem", "error", { vertical: "top", horizontal: "center" })
      return;
    }

    console.log("Texto: " + textContent + "\n\n" + "Imagem: " + image);
  };

  const handleDiscard = () => {
    setImage(null);
    setClear(true);
    handleMessage("Polaroid descartada", "info", { vertical: "top", horizontal: "center" });
  };

  const handlePdf = () => {
    // ação para PDF
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: "calc(100vh - 32px)",
        position: "relative",
      }}
    >
      <HeaderActions onSave={handleSave} onDiscard={handleDiscard} onPdf={handlePdf} />
      <Polaroid
        faces={{
          front: <CardCover imageFile={image} setImageFile={setImage} />, 
          back: <PolaroidForm clear={clear} setContent={(content) => setTextContent(content)} />, 
        }}
      />
    </Stack>
  );
};

export default CreatePolaroid;

import { Stack, Button, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";
import { useState } from "react";
import { useApp } from "../../hooks/useApp";
import DeleteIcon from "@mui/icons-material/Delete";

const CreatePolaroid = () => {
  const [textContent, setTextContent] = useState("");
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
    setTextContent("");
    setImage(null);
    handleMessage("Polaroid descartada", "info", { vertical: "top", horizontal: "center" });
  };

  return (


    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: "calc(100vh -64px)",
        position: "relative",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={1}
        sx={{
          width: "100%",
          minHeight: 64,
        }}
      >
        <IconButton
          color="error"
          onClick={handleDiscard}
          sx={{
            display: { xs: "flex", md: "none" },
            minWidth: "40px",
            fontSize: "1.2rem",
            background: "#1e1e1e10"
          }}
        >
          <DeleteIcon />
        </IconButton>

        <IconButton
          color="primary"
          onClick={handleSave}
          sx={{
            display: { xs: "flex", md: "none" },
            minWidth: "40px",
            fontSize: "1.2rem",
            background: "#1e1e1e10"
          }}
        >
          <SaveIcon />
        </IconButton>

        <Button
          variant="contained"
          color="error"
          onClick={handleDiscard}
          sx={{
            display: { xs: "none", md: "flex" },
            minWidth: "80px",
            fontSize: "1rem",
            padding: "8px 16px",
            marginRight: 1,
          }}
          startIcon={<DeleteIcon />}
        >
          Descartar
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          sx={{
            display: { xs: "none", md: "flex" },
            minWidth: "80px",
            fontSize: "1rem",
            padding: "8px 16px",
          }}
          startIcon={<SaveIcon />}
        >
          Salvar
        </Button>
      </Stack>
      <Polaroid
        children={{
          front: <CardCover imageFile={image} setImageFile={setImage} />,
          back: <PolaroidForm setContent={(content) => setTextContent(content)} />,
        }}
      />
    </Stack>
  );
};

export default CreatePolaroid;

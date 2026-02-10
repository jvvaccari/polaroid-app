import { CircularProgress, Stack } from "@mui/material";
import Polaroid from "./components/Polaroid";
import CardCover from "./components/Polaroid/CardCover";
import PolaroidForm from "./components/Polaroid/PolaroidForm";
import { useState } from "react";
import { useApp } from "../../hooks/useApp";
import HeaderActions from "./components/HeaderActions";
import { useCreatePolaroid } from "../../hooks/usePolaroid";

const CreatePolaroid = () => {
  const [textContent, setTextContent] = useState("");
  const [clear, setClear] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const { handleMessage } = useApp();
  const { mutate, isPending } = useCreatePolaroid();

  const handleSave = () => {
    if (!image) {
      handleMessage("Selecione uma imagem", "error", {
        vertical: "top",
        horizontal: "center",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("backContent", textContent);
    formData.append("keyNumber", "0");

    mutate(formData, {
      onSuccess: () => {
        handleMessage("Polaroid criada com sucesso!", "success", {
          vertical: "top",
          horizontal: "center",
        });
        setImage(null);
        setTextContent("");
        setClear(true);
      },
      onError: (error) => {
        handleMessage("Erro ao criar polaroid: " + error.message, "error", {
          vertical: "top",
          horizontal: "center",
        });
      },
    });
  };

  const handleDiscard = () => {
    setImage(null);
    setClear(true);
    handleMessage("Polaroid descartada", "info", {
      vertical: "top",
      horizontal: "center",
    });
  };

  if (isPending) {
    return (
      <Stack alignItems="center" justifyContent="center" flex={1}>
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Stack flex={1}>
      <HeaderActions onSave={handleSave} onDiscard={handleDiscard} />
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
    </Stack>
  );
};

export default CreatePolaroid;

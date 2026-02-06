import { Box, ButtonBase, IconButton, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import ImageItem from "../../../../../components/ImageItem";
import polaroidIcon from "../../../../../assets/icons/pages/CreatePolaroid/polaroidIcon.png";

interface CardCoverProps {
  imageFile: File | null;
  setImageFile: (image: File) => void;
}

const CardCover = ({ imageFile, setImageFile }: CardCoverProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputImage = <input
    ref={inputRef}
    type="file"
    accept="image/*"
    style={{ display: "none" }}
    onChange={(e) => {
      e.stopPropagation();
      handleFileChange(e);
    }}
  />;

  const handleUploadImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        width: "100%",
        height: "100%",
      }}
    >
      <Box height="100%" width="100%" p={"24px 24px 72px 24px"} position="relative">
        {!imageFile &&
          <ButtonBase
            onClick={handleUploadImage}
            sx={{
              width: "100%",
              height: "100%",
              border: "1px dashed #1e1e1e",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            focusRipple
          >
            {inputImage}
            <Box component={"img"} src={polaroidIcon} width={100} mb={2} />
            <Typography fontWeight={600}>Adicione uma imagem</Typography>
          </ButtonBase>
        }
        {imageFile && (
          <Box position="relative" width="100%" height="100%">
            <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 16,
                zIndex: 1000,
                color: "#fff",
                background: "rgba(0,0,0,0.3)",
                borderRadius: "50%",
                width: 32,
                height: 32,
                p: 0.8,
                "&:hover": { background: "rgba(0, 0, 0, 0.6)" }
              }}
              onClick={handleUploadImage}
            >
              {inputImage}
              <EditIcon
              />
            </IconButton>
            <ImageItem src={URL.createObjectURL(imageFile)} alt={"Preview Image"} />
          </Box>)}
      </Box>
    </Stack>
  );
};

export default CardCover;

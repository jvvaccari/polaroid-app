import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import polaroidIcon from "../../../../../assets/icons/pages/CreatePolaroid/polaroidIcon.png";

const CardCover = () => {
  const handleUploadImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
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
      <Box height="100%" width="100%" p={6}>
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
          <Box component={"img"} src={polaroidIcon} width={100} mb={2} />
          <Typography fontWeight={600}>Adicione uma imagem</Typography>
        </ButtonBase>
      </Box>
    </Stack>
  );
};

export default CardCover;

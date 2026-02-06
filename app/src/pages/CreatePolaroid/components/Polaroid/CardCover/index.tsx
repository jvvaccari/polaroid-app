import { Box, Stack } from "@mui/material";
import polaroidIcon from "../../../../../assets/icons/pages/CreatePolaroid/polaroidIcon.png";

const CardCover = () => {
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
      <Box height="100%" width="100%" p={4}>
        <Stack
          width="100%"
          height="100%"
          border={"1px dashed #1e1e1e"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box component={"img"} src={polaroidIcon} width={100} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default CardCover;

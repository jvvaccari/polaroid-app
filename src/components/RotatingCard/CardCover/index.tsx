import { Box, Stack } from "@mui/material";
import { type ReactNode } from "react";

const CardCover = ({ cover }: { cover: ReactNode }) => {
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
      <Box overflow={"hidden"} height="100%">
        {cover}
      </Box>
    </Stack>
  );
};

export default CardCover;

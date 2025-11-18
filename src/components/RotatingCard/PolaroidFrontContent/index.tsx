import { Box, Stack } from "@mui/material";
import { type ReactNode } from "react";
import CurrentDate from "../../CurrentDate";

const PolaroidFrontContent = ({ content }: { content: ReactNode }) => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "26px",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        width: "100%",
        height: "100%",
      }}
    >
      <Box overflow={"hidden"} maxHeight="89%">
        {content}
      </Box>
      <CurrentDate />
    </Stack>
  );
};

export default PolaroidFrontContent;

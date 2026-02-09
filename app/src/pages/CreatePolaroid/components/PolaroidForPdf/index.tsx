import { Box, Stack, Typography } from "@mui/material";
import ImageItem from "../../../../components/ImageItem";

interface PolaroidForPdfProps {
  imageFile: File | null;
  textContent: string;
}

const PolaroidForPdf = ({ imageFile, textContent }: PolaroidForPdfProps) => {
  const maxWidth = { xs: 320, sm: 380, md: 420 };

  const polaroidContainerStyle = {
    backgroundColor: "transparent",
    width: "100%",
    height: { xs: maxWidth.xs * 1.2, md: maxWidth.md * 1.2 },
    maxWidth: { xs: maxWidth.xs, md: maxWidth.md },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform",
    userSelect: "none",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06)",
  };

  const polaroidFrontStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "24px 24px 72px 24px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "1px solid #e8e8e8",
  };

  const polaroidBackStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: "1px solid #e8e8e8",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "100%",
    border: imageFile ? "none" : "2px dashed #1e1e1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: imageFile ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
  };

  const textContentStyle = {
    width: "100%",
    minHeight: "280px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    padding: "0",
    margin: "0",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
  };

  return (
    <Stack
      spacing={2}
      p={1}
      sx={{
        backgroundColor: "white",
      }}
    >
      <Box sx={polaroidContainerStyle}>
        <Box sx={polaroidFrontStyle}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: 0.05,
              background: `
                repeating-conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  #3d3b3b 1deg, 
                  transparent 2deg
                ) 0 0 / 20px 20px,
                repeating-conic-gradient(from 0deg at 50% 50%, 
                  transparent 0deg, 
                  #3d3b3b 1deg, 
                  transparent 2deg
                ) 10px 10px / 20px 20px
              `,
              pointerEvents: "none",
            }}
          />
          <Box sx={imageContainerStyle}>
            {imageFile ? (
              <ImageItem
                src={URL.createObjectURL(imageFile)}
                alt="Polaroid Image"
              />
            ) : (
              <Box
                sx={{
                  color: "#666",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16px",
                }}
              >
                Sem imagem
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Verso do Polaroid */}
      {textContent.length > 0 && (
        <Box sx={polaroidContainerStyle}>
          <Box sx={polaroidBackStyle}>
            <Typography sx={textContentStyle}>{textContent}</Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default PolaroidForPdf;

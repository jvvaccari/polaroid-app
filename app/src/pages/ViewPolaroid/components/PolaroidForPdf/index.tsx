import { Box, Stack, Typography } from "@mui/material";
import ImageItem from "../../../../components/ImageItem";

interface PolaroidForPdfProps {
  imageUrl: string;
  textContent: string;
}

const PolaroidForPdf = ({ imageUrl, textContent }: PolaroidForPdfProps) => {
  // Dimensões fixas para o PDF — não depende do tamanho da tela
  const fixedWidth = 420;

  const polaroidContainerStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    width: fixedWidth,
    height: fixedWidth * 1.2,
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

  const polaroidBackStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: "24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: "1px solid #e8e8e8",
    overflow: "hidden",
  };

  const imageContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    border: imageUrl.length > 0 ? "none" : "2px dashed #1e1e1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    boxShadow: imageUrl.length > 0 ? "0 1px 4px rgba(0, 0, 0, 0.1)" : "none",
  };

  const textContentStyle: React.CSSProperties = {
    width: "100%",
    maxHeight: `${fixedWidth * 1.2 - 48}px`,
    overflow: "hidden",
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
      style={{
        padding: "8px",
        backgroundColor: "white",
        width: `${fixedWidth + 16}px`,
      }}
    >
      <Box style={polaroidContainerStyle}>
        <Box style={polaroidFrontStyle}>
          <Box
            style={{
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
          <Box style={imageContainerStyle}>
            {imageUrl.length > 0 ? (
              <ImageItem src={imageUrl} alt="Polaroid Image" />
            ) : (
              <Box
                style={{
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

      {textContent.length > 0 && (
        <Box style={polaroidContainerStyle}>
          <Box style={polaroidBackStyle}>
            <Typography style={textContentStyle}>{textContent}</Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default PolaroidForPdf;

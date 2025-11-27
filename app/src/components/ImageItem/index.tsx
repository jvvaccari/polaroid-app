import { Box } from "@mui/material";

interface ImageItemProps {
  src?: string;
  alt: string;
  sx?: object;
}

const ImageItem = ({ src, alt, sx }: ImageItemProps) => {
  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={alt}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
          ...sx,
        }}
      />
      {/* Debug: mostra o valor do src na tela */}
      <Box sx={{ color: "white", fontSize: 12, mt: 1 }}>
        src: {src || "undefined"}
      </Box>
    </Box>
  );
};

export default ImageItem;

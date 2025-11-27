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
        sx={{
          bgcolor: "black",
          padding: 10,
          color: "white",
          fontSize: 12,
          mt: 1,
          zIndex: 1000,
        }}
      >
        {src || "undefined"}
      </Box>
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
    </Box>
  );
};

export default ImageItem;

import { Box } from "@mui/material";

interface ImageItemProps {
  src: string;
  alt: string;
  sx?: object;
}

const ImageItem = ({ src, alt, sx }: ImageItemProps) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
        ...sx,
      }}
    />
  );
};

export default ImageItem;

import { Box } from "@mui/material";

interface ImageItemProps {
  src?: string;
  alt: string;
  sx?: object;
}

const ImageItem = ({ src, alt, ...sx }: ImageItemProps) => {
  return (
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
        objectPosition: "center",
        ...sx,
      }}
    />
  );
};

export default ImageItem;

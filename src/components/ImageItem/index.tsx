import { Box } from "@mui/material";

interface ImageItemProps {
    src: string;
    alt: string;
    sx?: object;
}

const ImageItem = ({ src, alt, ...sx }: ImageItemProps) => {
    return (
        <Box
            component="img"
            src={src}
            alt={alt}
            sx={{ width: '100%', height: 'auto', objectFit: 'cover', ...sx }}
        />
    );
};

export default ImageItem;

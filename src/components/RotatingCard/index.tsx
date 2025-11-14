import Box from "@mui/material/Box";
import { type ReactNode, useState } from "react";

const RotatingCard = ({
  children,
}: {
  children: { front: ReactNode; back: ReactNode };
}) => {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const cardStyle = {
    backgroundColor: "transparent",
    width: "100%",
    maxWidth: "580px",
    aspectRatio: "1",
    perspective: 1000,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform",
    transition: "box-shadow 0.5s",
  };

  const innerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.3s cubic-bezier(.23,1,.32,1)",
    transformStyle: "preserve-3d",
    backgroundColor: "transparent",
    transform: `rotateY(${flipped ? -180 : 0}deg) rotateX(${
      tilt.y
    }deg) rotateY(${tilt.x}deg)`,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  const sideStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    overflow: "hidden",
    backgroundColor: "transparent",
    WebkitBackfaceVisibility: "hidden",
    WebkitTransform: "translateZ(0)",
    transform: "translateZ(0)",
    outline: "1px solid transparent", 
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const maxTilt = 12;
    const tiltX = ((x - centerX) / centerX) * maxTilt;
    const tiltY = -((y - centerY) / centerY) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Box
      style={cardStyle}
      onClick={() => setFlipped((f) => !f)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Box style={innerStyle}>
        <Box
          style={{
            ...sideStyle,
            transform: "rotateY(0deg) translateZ(1px)",
          }}
        >
          {children.front}
        </Box>
        <Box
          style={{
            ...sideStyle,
            transform: "rotateY(-180deg) translateZ(1px)",
          }}
        >
          {children.back}
        </Box>
      </Box>
    </Box>
  );
};

export default RotatingCard;

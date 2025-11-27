import Box from "@mui/material/Box";
import {
  type ReactNode,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const RotatingCard = ({
  children,
}: {
  children: { front: ReactNode; back: ReactNode };
}) => {
  const [flipped, setFlipped] = useState(false);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const cardStyle = {
    backgroundColor: "transparent",
    width: { xs: "80%", md: "100%" },
    maxWidth: "620px",
    aspectRatio: 1,
    perspective: 1000,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    willChange: "transform",
    transition: "box-shadow 0.2s",
  };

  const innerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.3s cubic-bezier(.23,1,.32,1)",
    transformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    backgroundColor: "transparent",
    transform: `translateZ(0) rotateY(${flipped ? -180 : 0}deg)`,
    willChange: "transform",
  };

  const sideStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: 25,
    overflow: "visible",
    backgroundColor: "transparent",
  };
  const maxTilt = 12;

  const applyTransform = useCallback(() => {
    if (!innerRef.current) return;
    const t = tiltRef.current;
    innerRef.current.style.transform = `rotateY(${
      flipped ? -180 : 0
    }deg) rotateX(${t.y}deg) rotateY(${t.x}deg)`;
    rafRef.current = null;
  }, [flipped]);

  const scheduleApply = () => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(applyTransform);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((x - centerX) / centerX) * maxTilt;
    const tiltY = -((y - centerY) / centerY) * maxTilt;
    tiltRef.current = { x: tiltX, y: tiltY };
    scheduleApply();
  };

  const handlePointerLeave = () => {
    tiltRef.current = { x: 0, y: 0 };
    scheduleApply();
  };

  useEffect(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (innerRef.current) {
      const t = tiltRef.current;
      innerRef.current.style.transform = `rotateY(${
        flipped ? -180 : 0
      }deg) rotateX(${t.y}deg) rotateY(${t.x}deg)`;
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [flipped]);

  return (
    <Box sx={cardStyle} onClick={() => setFlipped((f) => !f)}>
      <Box ref={innerRef} style={innerStyle}>
        <Box
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onPointerUp={handlePointerLeave}
          onPointerCancel={handlePointerLeave}
          sx={{
            ...sideStyle,
            transform: "rotateY(0deg)",
          }}
        >
          {children.front}
        </Box>
        <Box
          sx={{
            ...sideStyle,
            transform: "rotateY(-180deg)",
          }}
        >
          {children.back}
        </Box>
      </Box>
    </Box>
  );
};

export default RotatingCard;

import { Stack, TextField } from "@mui/material";

interface PolaroidFormProps {
  setContent: (content: string) => void;
}

const PolaroidForm = ({ setContent }: PolaroidFormProps) => {
  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        overflowY: "auto",
        justifyContent: "space-between",
        height: "100%",
      }}
      spacing={4}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <TextField sx={{ width: "100%" }} multiline onClick={(e) => e.stopPropagation()} onChange={(e) => setContent(e.target.value)}/>
    </Stack>
  );
};

export default PolaroidForm;

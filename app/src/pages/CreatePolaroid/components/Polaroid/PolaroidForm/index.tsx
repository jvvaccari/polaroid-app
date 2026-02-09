import { Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface PolaroidFormProps {
  clear: boolean;
  setContent: (content: string) => void;
}

const PolaroidForm = ({ clear, setContent }: PolaroidFormProps) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const clearValues = () => {
      if (clear) {
        setValue("");
        setContent("");
      }
    };

    clearValues();
  }, [clear, setContent]);

  return (
    <Stack
      id="polaroid-back"
      sx={{
        alignItems: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        overflowY: "hidden",
        justifyContent: "space-between",
        height: "100%",
      }}
      spacing={4}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <TextField
        sx={{ width: "100%" }}
        multiline
        rows={18}
        maxRows={18}
        inputProps={{ maxLength: 610 }}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const text = e.target.value;
          if (text.length <= 610) {
            setContent(text);
            setValue(text);
          }
        }}
        value={value}
        helperText={`${value.length}/600 caracteres`}
      />
    </Stack>
  );
};

export default PolaroidForm;

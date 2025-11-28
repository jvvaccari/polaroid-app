import { Stack, TextField, Button, FormHelperText } from "@mui/material";
import { useState } from "react";

const AnswerForm = ({
  answer,
  setAnswer,
  onSubmit,
}: {
  answer: string;
  setAnswer: (v: string) => void;
  onSubmit: () => void;
}) => {
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!answer.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onSubmit();
  };

  return (
    <Stack
      spacing={0.5}
      sx={{ width: "100%" }}
      onClick={(e) => e.stopPropagation()}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", alignItems: "flex-start" }}
        onClick={(e) => e.stopPropagation()}
      >
        <TextField
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            if (error) setError(false);
          }}
          onClick={(e) => e.stopPropagation()}
          placeholder="Qual o número do dia?"
          variant="outlined"
          size="small"
          error={error}
          sx={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              fontWeight: 600,
              letterSpacing: "0.05em",
            },
          }}
        />
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleSubmit();
          }}
          variant="contained"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "none",
          }}
        >
          Enviar
        </Button>
      </Stack>
      <FormHelperText error={error} sx={{ minHeight: "20px", ml: 1.75 }}>
        {error ? "Campo obrigatório" : ""}
      </FormHelperText>
    </Stack>
  );
};

export default AnswerForm;

import { Stack, TextField, Button } from "@mui/material";

const AnswerForm = ({
  answer,
  setAnswer,
  onSubmit,
}: {
  answer: string;
  setAnswer: (v: string) => void;
  onSubmit: () => void;
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ width: "100%", mt: 2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <TextField
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Qual o número do dia?"
        variant="outlined"
        size="small"
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
          onSubmit();
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
  );
};

export default AnswerForm;

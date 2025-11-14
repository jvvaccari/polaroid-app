import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

const BackContent = ({ content }: { content: string }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    // Aqui você pode adicionar a lógica para verificar a resposta
    console.log("Resposta enviada:", answer);
    // Exemplo: verificar se a resposta está correta
    // if (answer === numeroCorreto) { ... }
  };

  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        padding: "0 24px 24px 24px",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        width: "100%",
        overflowY: "auto",
        justifyContent: "space-between",
        height: "100%",
      }}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <Stack>
        <ReactMarkdown
          children={content}
          rehypePlugins={[rehypeRaw, remarkBreaks]}
          components={{
            p: ({ ...props }) => (
              <Box
                component="p"
                {...props}
                sx={{
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  letterSpacing: "0.05em",
                }}
              />
            ),
          }}
        />
      </Stack>

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
    </Stack>
  );
};

export default BackContent;

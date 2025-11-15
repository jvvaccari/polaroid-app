import { Stack } from "@mui/material";
import { useState } from "react";
import MarkdownContent from "../../MarkdownContent";
import AnswerForm from "./AnswerForm";

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
        <MarkdownContent content={content} />
      </Stack>

      <AnswerForm
        answer={answer}
        setAnswer={setAnswer}
        onSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default BackContent;

import { Stack } from "@mui/material";
import MarkdownContent from "../../MarkdownTextContent";

const BackContent = ({
  content,
}: {
  isOnlyContent: boolean;
  content?: string;
  handleSubmit?: (answer: string) => void;
}) => {
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
      spacing={4}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <Stack>
        <MarkdownContent content={content || ""} />
      </Stack>
    </Stack>
  );
};

export default BackContent;

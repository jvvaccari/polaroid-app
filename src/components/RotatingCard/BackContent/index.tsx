import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { Stack } from "@mui/material";

const BackContent = ({ content }: { content: string }) => {
  return (
    <Stack
      sx={{
        alignItems: "flex-start",
        padding: "24px",
        boxSizing: "border-box",
        backgroundColor: "primary.light",
        backgroundImage: `radial-gradient(circle, rgba(61, 59, 59, 0.08) 1.4px, transparent 1.4px)`,
        backgroundSize: "20px 20px",
        width: "100%",
        height: "100%",
      }}
    >
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
          input: ({ ...props }) => (
            <input {...props} onClick={(e) => e.stopPropagation()} />
          ),
        }}
      />
    </Stack>
  );
};

export default BackContent;

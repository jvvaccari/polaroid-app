import Box from "@mui/material/Box";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

const MarkdownContent = ({ content }: { content: string }) => {
  return (
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
  );
};

export default MarkdownContent;

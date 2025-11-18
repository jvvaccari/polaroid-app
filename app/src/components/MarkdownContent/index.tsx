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
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              letterSpacing: "0.05em",
              lineHeight: 1.8,
              marginBottom: 2,
              color: "text.primary",
            }}
          />
        ),
        strong: ({ ...props }) => (
          <Box
            component="strong"
            {...props}
            sx={{
              fontWeight: 800,
              color: "primary.main",
            }}
          />
        ),
        em: ({ ...props }) => (
          <Box
            component="em"
            {...props}
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              color: "text.secondary",
            }}
          />
        ),
        hr: () => (
          <Box
            component="hr"
            sx={{
              border: "none",
              borderTop: "2px solid",
              borderColor: "divider",
              margin: "2rem 0",
              opacity: 0.6,
            }}
          />
        ),
      }}
    />
  );
};

export default MarkdownContent;

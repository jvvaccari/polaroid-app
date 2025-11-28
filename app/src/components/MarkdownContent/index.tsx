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
        p: ({ children }) => (
          <Box
            component="p"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.6rem" },
              letterSpacing: "0.5px",
              lineHeight: 1.8,
              marginBottom: -0.6,
              color: "text.primary",
            }}
          >
            {children}
          </Box>
        ),
        strong: ({ children }) => (
          <Box
            component="strong"
            sx={{
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            {children}
          </Box>
        ),
        em: ({ children }) => (
          <Box
            component="em"
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              color: "text.secondary",
            }}
          >
            {children}
          </Box>
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

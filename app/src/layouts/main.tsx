import { Container, Stack, type SxProps, type Theme } from "@mui/material";

interface MainLayoutProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const MainLayout = ({ children, sx }: MainLayoutProps) => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        margin: 0,
        padding: 0,
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default MainLayout;

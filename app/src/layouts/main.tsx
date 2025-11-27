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
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: 0,
        padding: 0,
        ...sx,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default MainLayout;

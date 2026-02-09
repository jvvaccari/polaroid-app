import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        margin: 0,
        padding: 0,
        backgroundColor: "primary.900",
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
        <Outlet />
      </Container>
    </Stack>
  );
};

export default MainLayout;

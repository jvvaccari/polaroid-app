import "./App.css";
import MainLayout from "./layouts/main";
import CreatePolaroid from "./pages/CreatePolaroid";
import ViewPolaroid from "./pages/ViewPolaroid";

function App() {
  return (
    <MainLayout sx={{ backgroundColor: "primary.dark" }}>
      <CreatePolaroid />;
      <ViewPolaroid/>
    </MainLayout>
  );
}

export default App;

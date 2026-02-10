import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import ViewPolaroid from "../pages/ViewPolaroid";
import CreatePolaroid from "../pages/CreatePolaroid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CreatePolaroid />,
      },
      {
        path: "/:id",
        element: <ViewPolaroid />,
      },
    ],
  },
]);

export default router;

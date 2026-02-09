import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import ViewPolaroid from "../pages/ViewPolaroid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/:id",
        element: <ViewPolaroid />,
      },
    ],
  },
]);

export default router;

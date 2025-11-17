import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Theme from "./theme/index.tsx";
import { AppProvider } from "./context/AppContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <AppProvider>
        <App />
      </AppProvider>
    </Theme>
  </StrictMode>
);

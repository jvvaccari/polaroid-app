import { type AlertColor } from "@mui/material";
import React, {
  createContext,
  useState,
  type ReactNode,
  useCallback,
} from "react";
import AlertMessage from "../components/AlertMessage";

interface AppContextProps {
  handleMessage: (
    message: string,
    error: AlertColor,
    position?: PositionProps
  ) => void;
}

interface PositionProps {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<AlertColor>();
  const [position, setPosition] = useState<PositionProps>({
    vertical: "top",
    horizontal: "right",
  });

  const handleMessage = useCallback(
    (message: string, error: AlertColor, position?: PositionProps) => {
      setMessage(message);
      setError(error);
      setOpenSnackbar(true);
      if (position) setPosition(position);
    },
    []
  );

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  return (
    <AppContext.Provider
      value={{
        handleMessage,
      }}
    >
      {children}
      <AlertMessage
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        severity={error}
        variant="filled"
        vertical={position.vertical}
        horizontal={position.horizontal}
      >
        {message}
      </AlertMessage>
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

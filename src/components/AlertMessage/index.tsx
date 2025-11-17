import { Alert, type AlertColor, Snackbar } from "@mui/material";

interface AlertMessageProps {
  children: string;
  open: boolean;
  onClose: () => void;
  severity?: AlertColor;
  variant?: "filled" | "standard" | "outlined";
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}

const AlertMessage = ({
  children,
  open,
  onClose,
  severity,
  variant,
  vertical = "top",
  horizontal = "right",
}: AlertMessageProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          minWidth: { xs: "200px", sm: "300px", md: "400px" },
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
          fontWeight: 500,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          "& .MuiAlert-message": {
            fontSize: "inherit",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            width: "100%",
          },
          "& .MuiAlert-icon": {
            alignItems: "center",
            marginRight: "12px",
          },
        }}
        variant={variant}
      >
        {children}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;

import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    brand: string[];
  }
  interface ThemeOptions {
    brand?: string[];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#5b8266",
      light: "#f0faff",
      dark: "#212529",
      contrastText: "#fff",
    },
    background: {
      default: "#f6eccc",
      paper: "#b0c09f",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "2rem",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: "16px",
  },
  spacing: "8px",
});

// Adiciona a paleta customizada ao objeto theme
theme.brand = [
  "#f0faff", // 0 - mais claro
  "#f6eccc", // 1
  "#dfe3bf", // 2
  "#b0c09f", // 3
  "#5b8266", // 4
  "#3b4853", // 5
  "#2b3238", // 6
  "#212922", // 7
  "#212529", // 8
  "#000000", // 9 - mais escuro
];

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

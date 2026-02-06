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
      dark: "#405c48c9",
      900: "#212529",
      contrastText: "#fff",
    },
  },
    typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

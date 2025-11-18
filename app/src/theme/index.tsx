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
  },
  typography: {
    fontFamily: "Send Flowers, cursive",
  },
});

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

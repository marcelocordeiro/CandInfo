import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Router from "./Router";

import Header from "./components/Header";
import Footer from "./components/Footer";

let theme = createTheme({
  palette: {
    primary: {
      main: "#284CA4",
      dark: "#1D4399",
      light: "#ACC7E2",
    },
    secondary: {
      main: "#007925",
    },
    grey: {
      "100": "#ECECEC",
      "200": "#616161",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          fontSize: "large !important",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontSize: "large !important",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  typography: {
    subtitle1: {
      fontSize: 30,
      color: theme.palette.primary.dark,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 20,
      color: theme.palette.primary.dark,
      fontWeight: 700,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

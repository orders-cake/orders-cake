import { createTheme } from "@mui/material/styles";
import { green, grey, indigo, red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme();

// Custom theme
theme = createTheme(theme, {
  palette: {
    // primary: {
    //     main: grey[700],
    //     light: grey[50],
    //     dark: grey[900],
    // },
    secondary: {
      main: indigo[50],
    },
    success: {
      main: green[500],
      light: green[50],
      dark: green[900],
    },
    danger: {
      main: red[500],
      light: red[50],
      dark: red[900],
    },
  },
  typography: {
    link: {
      fontSize: "0.8rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "0.9rem",
      },
      fontWeight: 500,
      color: theme.palette.primary.main,
      display: "block",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.2rem",
      display: "block",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
    },
    h7: {
      fontSize: "0.8rem",
    },
    h8: {
      fontSize: "0.7rem",
    },
  },
});

export default theme;

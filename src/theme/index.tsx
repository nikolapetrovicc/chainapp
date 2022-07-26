import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h5: {
      fontSize: "1.7rem",
      color: "white",
      fontWeight: "300",
    },
    h6: {
      fontSize: "1.5rem",
      color: "white",
      fontWeight: "300",
    },
    body1: {
      color: "#787878",
      fontSize: "1.1rem",
      fontWeight: "400",
    },
    body2: {
      color: "#787878",
      fontSize: "1.1rem",
      fontWeight: "300",
    },
  },
  palette: {
    primary: {
      main: "#5b2def",
    },
    secondary: {
      main: "#17171f",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "white",
            color: "#5b2def",
            fontWeight: "400",
            textTransform: "none",
          },
          textTransform: "none",
          fontSize: "1rem",
          padding: "0.5rem 1.3rem",
          backgroundColor: "#5b2def",
          color: "white",
          borderRadius: "0.6rem",
        },
        contained: {
          backgroundColor: "#303030",
          color: "#e8e8e8",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: "#1c1a27",
          border: "none",
          color: "white",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#2b2433",
            borderRadius: "0.6rem",
            color: "white",
          },
        },
      },
    },
    MuiListItemIcon: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#5b2def",
          },
        },
      },
    },
  },
});

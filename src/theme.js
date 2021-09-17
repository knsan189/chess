import { unstable_createMuiStrictModeTheme } from "@material-ui/core";

export const theme = unstable_createMuiStrictModeTheme({
  breakpoints: {
    values: { md: 768 },
  },
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"],
    subtitle1: {
      fontWeight: "bold",
    },
    subtitle2: {
      // fontSize: "0.9rem",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "0.775rem",
    },
    caption: {
      fontSize: "0.65em",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  borderRadius: "50%",

  colors: {
    main: "#f5f5f5",
    secondary: "black",
    titleColor: "black",
    textColor: "#2f3640",
    accentColor: "#0097e6",
    bgColor: "#e1b12c",
    btnColor: "tomato",
  },
};

export const darkTheme: DefaultTheme = {
  borderRadius: "0%",

  colors: {
    main: "#2f3640",
    secondary: "#192a56",
    titleColor: "#f5f6fa",
    textColor: "#353b48",
    accentColor: "#4cd137",
    bgColor: "#2f3640",
    btnColor: "#40739e",
  },
};

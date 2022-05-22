import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const themes = {
  avengers: {
    bg: "#ceceff",
    color: "#335",
    color2: "rgba(5,5,100,.5)",
    line: "black",
  },
  spiderman: {
    bg: "#F23000",
    color: "#aaa",
    color2: "brown",
    line: "black",
  },
};

export const Theme = (props) => {
  return (
    <ThemeProvider theme={themes[props.theme.toLowerCase()]}>
      <GlobalStyle></GlobalStyle>
      {props.children}
    </ThemeProvider>
  );
};

import React from "react";
import GlobalStyle from "../src/utilities/globalStyles";
import { BrowserRouter } from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <GlobalStyle />
      <Story />
    </BrowserRouter>
  ),
];

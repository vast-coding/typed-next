import App from "next/app";

import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core/styles";

import { themeDark, themeLight } from "lib/theme";

const MyApp = ({ Component, pageProps }) => {
  const theme = false ? themeDark : themeLight;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};
export default MyApp;

import "../styles/globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import theme from "../constants/theme";
import { AdminLayout } from "../layout";

// import { LogisticContext } from "contextApi/LogisticContext";

import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <LogisticContext> */}
      <AdminLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </AdminLayout>
      {/* </LogisticContext> */}
    </>
  );
}

export default MyApp;

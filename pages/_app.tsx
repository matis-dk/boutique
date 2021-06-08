import type { AppProps } from "next/app";

import { Box, ThemeProvider } from "theme-ui";
import theme, { colors } from "../src/theme/theme";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Box
          sx={{
            minHeight: "calc(100vh - 100px)",
            backgroundColor: colors.white1,
          }}
        >
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;

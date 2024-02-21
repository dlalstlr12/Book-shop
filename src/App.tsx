import React from "react";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./style/theme";
import { GlobalStyle } from "./style/global";
function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle themeName="dark" />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { isDarkContext } from "./helper/Context";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark")
      ? JSON.parse(localStorage.getItem("isDark"))
      : false
  );

  if (!localStorage.getItem("isDark")) {
    localStorage.setItem("isDark", false);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : chosenTheme}>
      <>
        <GlobalStyles />
        <isDarkContext.Provider value={{ isDark, setIsDark }}>
          <Main theme={isDark ? darkTheme : chosenTheme} />
        </isDarkContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;

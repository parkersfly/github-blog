import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/globals";
import { BrowserRouter } from "react-router-dom";
import { IssuesProvider } from "./contexts/IssuesContext";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <IssuesProvider>
            <Router />      
          </IssuesProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

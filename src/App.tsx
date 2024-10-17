import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/globals";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  )
}

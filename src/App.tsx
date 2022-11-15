import { ThemeProvider } from "styled-components";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </ThemeProvider>
  );
}

import Home from "pages/Home";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import theme from "styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);

export default App;

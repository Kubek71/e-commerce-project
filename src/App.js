import { GlobalStyles } from "./components/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import Header from "./components/Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

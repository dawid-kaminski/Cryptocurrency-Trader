import Header from "./Components/Header/Header";
import { AppContainer } from "./Components/Container/Container.style";
import { GlobalStyles } from "./GlobalStyles.styles";
import "./App.css";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
    </AppContainer>
  );
}

export default App;

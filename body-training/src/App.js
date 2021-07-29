import Header from "./Components/Header/Header";
import DietPlan from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import { AppContainer } from "./Components/Container/Container.style";
import { GlobalStyles } from "./GlobalStyles.styles";
import "./App.css";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <DietPlan />
      <Footer />
    </AppContainer>
  );
}

export default App;

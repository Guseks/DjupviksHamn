import {
  AppContainer,
  BackGroundImg,
  Navbar,
  MainContent,
  Footer,
} from "./components/ui/main";
import headerImage from "./assets/header.png";

const App = () => {
  return (
    <AppContainer>
      <BackGroundImg src={headerImage} />
      <Navbar>Navbar</Navbar>
      <MainContent>Main Content</MainContent>
      <Footer>Footer</Footer>
    </AppContainer>
  );
};

export default App;

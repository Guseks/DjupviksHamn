import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import {
  BackGroundImg,
  Navbar,
  Footer,
  AppContainer,
} from "./components/ui/main";
import headerImage from "./assets/header.png";
import Info from "./components/Info";
import "./App.css";

const App = () => {
  return (
    <AppContainer>
      <BackGroundImg src={headerImage} />
      <Navbar>
        <ul style={{ display: "flex", listStyle: "none", gap: "35px" }}>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { textDecoration: "underline" } : {};
              }}
              className="nav-link"
              to="/"
            >
              Start
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { textDecoration: "underline" } : {};
              }}
              className="nav-link"
              to="/info"
            >
              Information
            </NavLink>
          </li>
        </ul>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Footer>Footer</Footer>
    </AppContainer>
  );
};

export default App;

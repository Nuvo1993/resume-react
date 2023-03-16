import "./App.css";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";
import AppBar from "@mui/material/AppBar";
import Header from "./components/Header/Header.js";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import NavBar from "./components/AppBar/NavBar.js";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <NavBar />
        <Header />
        <Projects />
        <Resume />
        <AboutMe />
        <Contact />
      </Box>
    </div>
  );
}

export default App;

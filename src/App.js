import "./App.css";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header.js";
import NavBar from "./components/AppBar/NavBar.js";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3e50",
    },
    secondary: {
      main: '#3498db',
    },
    background: {
      default: "#ecf0f1",
      paper: "#ffffff",
    },
    text: {
      primary: "#2c3e50",
      secondary: "#7f8c8d",
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Header />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;

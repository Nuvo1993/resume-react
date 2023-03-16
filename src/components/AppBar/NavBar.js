
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        ></Typography>
        {/* <Button to="section1" variant="text" color="inherit" >Projects</Button>
      <Button variant="text" color="inherit" >Resume</Button>
      <Button variant="text" color="inherit" >About Me</Button>
      <Button variant="text" color="inherit" >Contact</Button> */}

        <Link
          activeClass="active"
          to="projectsSection"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
        >
        <Button variant="text" color="inherit">Projects</Button>
        </Link>
        <Link
          activeClass="active"
          to="resumeSection"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
        >
        <Button variant="text" color="inherit">Resume</Button>
        </Link>
        <Link
          activeClass="active"
          to="aboutMeSection"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
        >
        <Button variant="text" color="inherit">About Me</Button>
        </Link>

        <Link
          activeClass="active"
          to="contactSection"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          delay={1000}
          isDynamic={true}
        >
        <Button variant="text" color="inherit">Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

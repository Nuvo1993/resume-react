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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useState } from "react";

const pages = ["Projects", "Resume", "Contact"];

function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            Austin Neveau
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: theme.palette.primary.main }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`${page.toLowerCase()}Section`} smooth={true} duration={500}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              width: 40,
              height: 40,
              border: `2px solid ${theme.palette.primary.main}`,
              mr: 2,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              AN
            </Typography>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link to={`${page.toLowerCase()}Section`} smooth={true} duration={500} key={page}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: theme.palette.text.primary, display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

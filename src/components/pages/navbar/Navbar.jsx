import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbarStyles.css";

const pages = ["Home", "AboutMe", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="header_appBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {/* MOBILE  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              width: "80%",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <div className="parrafo_front">
              <Typography variant="body1" fontWeight={800} fontSize={"1.3rem"}>
                {" "}
                FrontEnd Developer{" "}
              </Typography>
            </div>
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
              className="menu_hamburg"
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="menuItem_hamburg"
                >
                  {/*  <a href="#" className="anchorList">
                    {page}
                  </a> */}
                  <a href={`#${page}`} className="boton_navbar_desktop">
                    {page}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: "space-evenly",
              gap: 3,
            }}
          >
            {pages.map((page) => (
              <a href={`#${page}`} className="boton_navbar_desktop" key={page}>
                {page}
              </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

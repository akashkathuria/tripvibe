import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { HEADLINES, LOGO_URL } from "../../constants/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { PageMeta } from "./SeoComponents";
import { ROUTES } from "../../constants/routes";
import { SEO } from "../../constants/seo";
const pages = [
  {
    label: "Home",
    route: ROUTES.HOME,
  },
  {
    label: "About",
    route: ROUTES.ABOUT,
  },
  {
    label: "Contact Us",
    route: ROUTES.CONTACT,
  },
];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const pageType = Object.keys(ROUTES).find((item) => ROUTES[item] === pathname);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [location]);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirectTo = (route) => {
    navigate(route);
    handleCloseNavMenu();
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const metaData = SEO[pageType];
  console.log("metaData", metaData);
  return (
    <>
    <PageMeta meta={metaData} />
    <AppBar sx={{backgroundColor: "var(--secondary)"}} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img alt="Logo" src={LOGO_URL} width={50} />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {HEADLINES.LOGO_TEXT}
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
              <MenuIcon />
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
                <MenuItem
                  key={page.label}
                  onClick={() => redirectTo(page.route)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <img alt='Logo' src="%PUBLIC_URL%/logo.png" /> */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {HEADLINES.LOGO_TEXT}
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => redirectTo(page.route)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={ROUTES.HOME}
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", md: "flex" },
              //   fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {HEADLINES.RIGHT_HEADER_TEXT}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Header;

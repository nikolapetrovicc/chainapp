import {
  AccountBox,
  Article,
  Group,
  Home,
  LogoDev,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  logo: {
    color: "white",
    margin: "1.5rem 0rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" p={3} sx={{ padding: "1.7rem" }}>
        <Box className={classes.logo}>
          <LogoDev />
          Logo
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Exchanges" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Prices" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Developers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Watchlist" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ color: "#959595" }}>
              <ListItemIcon sx={{ color: "#959595" }}>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Calendars" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

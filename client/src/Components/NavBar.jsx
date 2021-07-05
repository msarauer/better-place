import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import betterplace from "../resources/better-place.png";
import {
  makeStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AccountBox from "./accountBox/AccountBox";
import ProfileBox from "./profileBox/ProfileBox";
import GeoLocation from "./GeoLocation";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(90deg, rgba(0,153,255,1) 20%, rgba(26,188,156,1)98%)",
  },
  text: {
    color: "#FFFFFF",
  },
  search: {
    width: "500px",
  },
  drawerInside: {
    // width: 600,
    height: 550,
    borderRadius: 25,
    // textTransform: "capitalize",
  },
  flex: {
    display: "flex",
  },
  button: {
    height: "2rem",
  },
});

const NavBar = ({ handleLocation, city, country, token, setToken }) => {
  const classes = useStyles();

  const [loginPage, setLoginPage] = React.useState({
    right: false,
  });

  const [profilePage, setProfilePage] = React.useState({
    right: false,
  });

  const toggleLogin = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLoginPage({ ...loginPage, [anchor]: open });
  };

  const toggleProfile = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setProfilePage({ ...profilePage, [anchor]: open });
  };

  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography variant="h6">
            <img src={betterplace} alt="betterplace" />
          </Typography>

          {/* GEO LOCATION */}
          <GeoLocation
            handleLocation={handleLocation}
            city={city}
            country={country}
          />
          <Grid container justify="flex-end" justify-content="space-between">
            <IconButton>
              <Typography className={classes.text}>Categories</Typography>
              <MenuIcon className={classes.text} />
            </IconButton>
            {/* ACCOUNT BOX ATTEMPT */}
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                {!token && (
                  <Button onClick={toggleLogin(anchor, true)}>Login</Button>
                )}
                {token && (
                  <div className={classes.flex}>
                    <p>{sessionStorage.getItem('token')}</p>
                    <button
                      className={classes.button}
                      onClick={() => setToken("")}
                    >
                      Logout
                    </button>
                  </div>
                )}
                <Drawer
                  classes={{ paper: classes.drawerInside }}
                  anchor={anchor}
                  open={loginPage[anchor]}
                  onClose={toggleLogin(anchor, false)}
                  onSubmit={toggleLogin(anchor, !token)}
                >
                  <AccountBox setToken={setToken} token={token} />
                </Drawer>
              </React.Fragment>
            ))}
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleProfile(anchor, true)}>Profile</Button>
                <Drawer
                  classes={{ paper: classes.drawerProfile }}
                  anchor={anchor}
                  open={profilePage[anchor]}
                  onClose={toggleProfile(anchor, false)}
                >
                  <ProfileBox />
                </Drawer>
              </React.Fragment>
            ))}
          </Grid>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default NavBar;

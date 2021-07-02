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
  makeStyles,
  createStyles,
  fade,
  Theme,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import AccountBox from "./accountBox/AccountBox";

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
});


const NavBar = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
          <Typography variant="h6">
            <img src={betterplace} />
          </Typography>
          <SearchBar
            className={classes.search}
            placeholder="Search for location..."
          ></SearchBar>
          <Grid container justify="flex-end" justify-content="space-between">
            <IconButton>
              <Typography className={classes.text}>Categories</Typography>
              <MenuIcon className={classes.text} />
            </IconButton>
            {/* ACCOUNT BOX ATTEMPT */}
            {["right"].map((anchor: any) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>Login</Button>
                <Drawer
                  classes={{ paper: classes.drawerInside }}
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <AccountBox />
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

import React, {useEffect, useState}from "react";
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
import axios from "axios";




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
    height: 800,
    borderRadius: 25,
    // textTransform: "capitalize",
  },
    drawerProfile: {
    // width: 600,
    height: 850,
    borderRadius: 25,
    // textTransform: "capitalize",
  },
  flex: {
    display: "flex",
  },
  logoutButton: {
    fontSize: 10,
    marginTop: 35,
    marginRight: -20
  },
  navBarProfile: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  currentLocation: {
    marginRight: 50,
    height: 50
  }
});

const NavBar = ({ handleLocation, city, country, token, setToken, setLng, setLat }) => {
  const classes = useStyles();

  const [user, setUser] = useState({})

  const [loginPage, setLoginPage] = React.useState({
    right: false,
  });
  const [profilePage, setProfilePage] = React.useState({
    right: false,
  });




    // useEffect(() => {
    //   axios
    //     .get(`/api/user/${token}`)
    //     .then((data) => {
    //       setUser(data.data.users[0]);
    //     })
    //     .catch((e) => {
    //       console.log("axiosError:", e);
    //     });
    // }, []);



    // console.log("WHy isnt the pic working anymore----", token)

  const toggleLogin = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLoginPage({ ...loginPage, [anchor]: open });
  };

  // const handleLogin = (anchor) => {
  //   if (token) {
  //     console.log("NO WAY HOMBRE")
  //     toggleLogin(anchor, false)
  //     toggleLogin(anchor, !token)
  //   } else {
  //   }
  // }

  

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
            className={classes.currentLocation}
            handleLocation={handleLocation}
            city={city}
            country={country}
            setLat={setLat}
            setLng={setLng}
          />
          <Grid container justify="flex-end" justify-content="space-between">
 
            {/* ACCOUNT BOX ATTEMPT */}
            {token && (
              ["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleProfile(anchor, true)}><img className={classes.navBarProfile} src={token.picture_url} alt="ProfilePic"/></Button>

                  {/* <Button onClick={toggleProfile(anchor, true)}>Profile</Button> */}
                  <Drawer
                    classes={{ paper: classes.drawerProfile }}
                    anchor={anchor}
                    open={profilePage[anchor]}
                    onClose={toggleProfile(anchor, false)}
                  >
                    <ProfileBox token={token} setToken={setToken}/>
                  </Drawer>
                </React.Fragment>
              ))
            )}
            
          
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                {!token && (
                  <>
                  <Button onClick={toggleLogin(anchor, true)}>Login</Button>
                  
                 </>

                )}
                {token && (
                  <div className={classes.flex}>
                    <p>{sessionStorage.getItem('token')}</p>
                    <Button
                      className={classes.logoutButton}
                      onClick={() => setToken("")}
                    >
                      Logout
                    </Button>
                  </div>
                )}
                <Drawer
                  classes={{ paper: classes.drawerInside }}
                  anchor={anchor}
                  open={loginPage[anchor]}
                  onClose={toggleLogin(anchor, false)}
                  // onSubmit={() => handleLogin()}
                  onSubmit={toggleLogin(anchor, !token)}
                  
                  // onClick={() => token && toggleLogin(anchor, false)}
                >
                  <AccountBox setToken={setToken} token={token} />

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

import React from "react";
import { makeStyles } from "@material-ui/core";
// import world from "/Vidoes/Better-Place.mp4";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  video: {
    width: "100%",
    margin: 0,
  },
});

interface Props {}

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h1>Hello from Header</h1>
      {/* <ReactPlayer playing={true}> */}
      <video autoPlay muted>
        <source src="/Videos/Better-Place.mp4" type="video/mp4" />
      </video>
      {/* </ReactPlayer> */}
      {/* <ReactPlayer
        url="../resources/Better-Place.mp4"
        className="react-player"
        playing
        width="100%"
        height="100%"
      /> */}
    </div>
  );
};

export default Header;

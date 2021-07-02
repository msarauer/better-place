import { makeStyles } from "@material-ui/core";
import "./Header.scss";

const useStyles = makeStyles({
  video: {
    width: "100%",
    margin: 0,
  },
});


const Header = (props) => {
  const classes = useStyles();
  return (
    <div className="videoContainer">
      <video className="myVideo" autoPlay muted>
        <source src="/Videos/newbetterplace.mp4" type="video/mp4" />
      </video>
      <div className="spacer">&nbsp;</div>
    </div>
  );
};

export default Header;

import { makeStyles } from "@material-ui/core";
import "./Header.scss";
import { useState } from "react";


const Header = (props) => {

  const [displayVid, setDisplayVid] = useState("myVideo")

  return (
    <div className="videoContainer">
      <video className={displayVid} autoPlay muted onEnded={() => setDisplayVid("noVideo")}>
        <source src="/Videos/newbetterplace.mp4" type="video/mp4" />
      </video>
      {displayVid === "myVideo"  && <div className="spacer">&nbsp;</div>}
      <div className="spacer"></div>
    </div>
  );
};

export default Header;

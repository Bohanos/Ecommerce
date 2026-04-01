import React from "react";
import livenow from "../../assets/background_files/background.gif";
import "./Abovelink.css";

const Abovelink = () => {
  return (
    <div className="abovelink"> 
        <div className="img">
          <a href=""><img src={livenow} alt="Live Now" /></a>
        </div>
    </div>
  )
}
export default Abovelink;
import React from "react";
//import ComingSoon from "react-coming-soon";
import "./ComingSoon.css";
import comingSoon from "../../assets/Svgs/comingSoon.svg";
function ComingSoon() {
  return (
    <div className="coming-container">
      <img src={comingSoon} height="500" alt="" />
      <h1 style={{ fontWeight: "bolder" }}>
        Feature
        <br />
        Coming Soon
      </h1>
    </div>
  );
}

export default ComingSoon;

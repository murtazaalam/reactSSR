import React from "react";
import { Link } from "react-router-dom";
import authSuccess from "../../../assets/Svgs/succesAuth.svg";
import "./AuthSuccess.css";
export default function AuthSuccess() {
  return (
    <div className="success">
      <img src={authSuccess} alt="Auth Successfull" />

      <p className="success-text">
        The entire team of Techvanto Academy is thrilled to welcome you on board
        !!
      </p>
      <Link to="/">
        <button className="btn-grad full-width"> Continue</button>
      </Link>
    </div>
  );
}

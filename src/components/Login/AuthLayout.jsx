import React from "react";
import authSvg from "../../assets/Svgs/auth.svg";

function AuthLayout(props) {
  return (
    <div className="auth">
      <div className="auth-leftside">
        <img src={authSvg} alt="authSvg" />
      </div>
      <div className="auth-rightside">
        <div className="auth-rightside-flex auth-rightside-signin">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

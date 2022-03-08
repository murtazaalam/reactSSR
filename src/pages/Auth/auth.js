/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SignUp from "../../components/Login/Content/SignUpContent";
import Login from "../../components/Login/Content/LoginContent";
import authSvg from "../../assets/Svgs/auth.svg";
import "./auth.css";
import OtpContent from "../../components/Login/Content/OtpContent";
function Signup() {
  const [modal, setModal] = useState([
    { id: 1, name: "otp", checked: false },
    { id: 2, name: "signin", checked: false },
    { id: 3, name: "signup", checked: true },
  ]);

  const handleModal = (e, id) => {
    e.preventDefault();
    const newModalInfo = [...modal];
    newModalInfo.forEach((modal) => {
      if (modal.id === id) return (modal.checked = true);
      else return (modal.checked = false);
    });
    setModal(newModalInfo);
  };

  const signupModal = (
    <div className="auth-rightside-flex auth-rightside-signup">
      <p className="member-text">
        Already a member?
        <a className="link" onClick={(e) => handleModal(e, 2)}>
          Sign In now
        </a>
      </p>
      <SignUp handleProceed={(e) => handleModal(e, 1)} />
    </div>
  );
  const otpModal = (
    <div className="auth-rightside-flex auth-rightside-signup">
      <p className="member-text">
        Already a member?
        <a className="link" onClick={(e) => handleModal(e, 2)}>
          Sign In now
        </a>
      </p>
      <OtpContent />
    </div>
  );

  const loginModal = (
    <div className="auth-rightside-flex auth-rightside-signin">
      <p className="member-text">
        Not a member?
        <a className="link" onClick={(e) => handleModal(e, 3)}>
          Sign Up now
        </a>
      </p>
      <Login />
    </div>
  );

  return (
    <div className="auth">
      <div className="auth-leftside">
        <img src={authSvg} alt="authSvg" />
      </div>
      <div className="auth-rightside">
        {modal.map((m) => {
          if (m.checked) {
            const id = m.id;
            console.log(id);
            if (id === 1) return otpModal;
            if (id === 2) return loginModal;
            if (id === 3) return signupModal;
          }
        })}
      </div>
      {/* <div className="auth-rightside">{signupModal}</div> */}
    </div>
  );
}

export default Signup;

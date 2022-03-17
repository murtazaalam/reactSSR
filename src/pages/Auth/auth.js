/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SignUp from "../../components/Login/Content/SignUpContent";
import Login from "../../components/Login/Content/LoginContent";
import "./auth.css";
import OtpContent from "../../components/Login/Content/OtpContent";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Login/AuthLayout";
function AuthPage() {
  const navigate = useNavigate();

  const [modal, setModal] = useState([
    { id: 1, name: "otp", checked: false },
    { id: 2, name: "signin", checked: true },
    { id: 3, name: "signup", checked: false },
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

  const handleVerify = (e) => {
    navigate("/register-success");
  };

  const signupModal = (
    <>
      <p className="member-text">
        Already a member?
        <a className="link" onClick={(e) => handleModal(e, 2)}>
          Sign In now
        </a>
      </p>
      <SignUp handleProceed={(e) => handleModal(e, 1)} />
    </>
  );
  const otpModal = (
    <>
      <p className="member-text">
        Already a member?
        <a className="link" onClick={(e) => handleModal(e, 2)}>
          Sign In now
        </a>
      </p>
      <OtpContent
        handleVerify={(e) => handleVerify(e)}
        title="Verify Mobile Number"
        heading="Enter OTP"
      />
    </>
  );

  const loginModal = (
    <>
      <p className="member-text">
        Not a member?
        <a className="link" onClick={(e) => handleModal(e, 3)}>
          Sign Up now
        </a>
      </p>
      <Login />
    </>
  );

  return (
    <AuthLayout>
      {modal.map((m) => {
        if (m.checked) {
          const id = m.id;
          console.log(id);
          if (id === 1) return otpModal;
          if (id === 2) return loginModal;
          if (id === 3) return signupModal;
        }
      })}
    </AuthLayout>
  );
}

export default AuthPage;

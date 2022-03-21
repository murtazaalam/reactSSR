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
  const [phone, setPhone] = useState();

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
      <SignUp
        otpContent={(event, id, phone) => {
          console.log(event, id, phone);
          setPhone(phone);
          // setPhone(phone);
          handleModal(event, id);
        }}
      />
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
        title="Verify Mobile Number"
        heading="Enter OTP"
        phone={phone}
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
      <Login
        otpContent={(event, id, otp, phone) => {
          console.log(event, id, otp, phone);
          setPhone(phone);
          handleModal(event, id);
        }}
      />
    </>
  );

  return (
    <AuthLayout>
      {modal.map((m) => {
        if (m.checked) {
          const id = m.id;
          if (id === 1) return otpModal;
          if (id === 2) return loginModal;
          if (id === 3) return signupModal;
        }
      })}
    </AuthLayout>
  );
}

export default AuthPage;

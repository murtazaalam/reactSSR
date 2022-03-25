import React, { useState } from "react";
import ForgetPasswordContent from "../../components/Login/Content/ForgetPasswordContent";
import OtpContent from "../../components/Login/Content/OtpContent";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Login/AuthLayout";
import ResetPassword from "./ResetPassword";
function ForgetPassword() {
  const navigate = useNavigate();
  const [forgotCode, setForgotCode] = useState();
  const [verifytype, setVerifyType] = useState("");
  const [phone, setPhone] = useState();
  const [modal, setModal] = useState([
    { id: 1, name: "form", checked: true },
    { id: 2, name: "otp", checked: false },
    { id: 3, name: "resetPassword", checked: false },
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

  return (
    <AuthLayout>
      {modal.map((m, index) => {
        if (m.checked) {
          if (m.id === 1)
            return (
              <ForgetPasswordContent
                handleModal={handleModal}
                otpContent={(event, id, forgotCode, phone, verifyType) => {
                  console.log(phone, forgotCode);
                  setVerifyType(verifyType);
                  setPhone(phone);
                  handleModal(event, id);
                }}
              />
            );
          if (m.id === 2)
            return (
              <OtpContent
                phone={phone}
                verifyType={verifytype}
                otpResponse={(event, id) => {
                  console.log(id);

                  handleModal(event, id);
                }}
                heading="Verification"
                subHeading="Enter the verification code we just
            sent you on your mobile number"
              />
            );
          if (m.id === 3)
            return <ResetPassword phone={phone} otp={forgotCode} />;
        }
      })}
    </AuthLayout>
  );
}

export default ForgetPassword;

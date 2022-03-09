import React, { useState } from "react";
import ForgetPasswordContent from "../../components/Login/Content/ForgetPasswordContent";
import OtpContent from "../../components/Login/Content/OtpContent";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Login/AuthLayout";
function ForgetPassword() {
  const navigate = useNavigate();
  const [modal, setModal] = useState([
    { id: 1, name: "form", checked: true },
    { id: 2, name: "otp", checked: false },
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

  const handleOtpVerify = () => {
    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      {modal.map((m, index) => {
        if (m.checked) {
          if (m.id === 1)
            return <ForgetPasswordContent handleModal={handleModal} />;
          if (m.id === 2)
            return (
              <OtpContent
                heading="Verification"
                subHeading="Enter the verification code we just
            sent you on your mobile number"
                handleVerify={(e) => handleOtpVerify()}
              />
            );
        }
      })}
    </AuthLayout>
  );
}

export default ForgetPassword;

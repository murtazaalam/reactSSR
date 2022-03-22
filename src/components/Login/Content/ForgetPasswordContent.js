import React, { useState } from "react";
import { Avatar, Box, TextField, Typography, Container } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../../../apis/api/ForgetPassword";

function ForgetPasswordContent({ otpContent }) {
  const navigate = useNavigate();

  const [contact, setContact] = useState();
  const [validatePhone, setValidatePhone] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const validation = (event) => {
    if (event.target.name === "phone") {
      setContact(event.target.value);
      let num = event.target.value;
      if (num.toString().length !== 10) {
        return setValidatePhone(true);
      }
      setValidatePhone(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    let body = {
      phone: contact,
    };
    if (!body.phone) {
      setLoader(false);
      toast.error("Email And Password Required", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return setError("Email And Password Required");
    }
    if (validatePhone) {
      setLoader(false);
      toast.error("Invalid Phone number", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return setError("Invalid Phone number");
    }

    let res = await ForgetPassword(body, setError, setLoader);
    //  console.log(error);
    if (res && res.status === 200) {
      alert(res.data.forgotCode);
      // emptyState();
      const verifyType = "forgotCode";
      otpContent(event, 2, res.data.forgotCode, contact, verifyType);
      toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // navigate("/");
    }

    if (res && res.status !== 200) {
      toast.warn(res.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, borderRadius: "0" }}
          src="https://i.ibb.co/jVR0Kyc/logo-3.png"
        />

        <Typography variant="h5" className="weightBold">
          Forgot Password?
        </Typography>
        <Typography
          className="fontSize-sm"
          align="center"
          sx={{ mt: 3, mb: 5 }}
        >
          Enter Mobile number associated with your account{" "}
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="PHONE"
          label="Phone Number"
          name="phone"
          value={contact}
          type="number"
          min="10"
          max="10"
          onChange={(e) => validation(e)}
          autoFocus
          error={validatePhone}
          sx={{ mb: 4 }}
          helperText={validatePhone ? "Invalid phone number." : ""}
        />

        <button className="btn-grad full-width ">Send Code</button>
      </Box>
    </Container>
  );
}

export default ForgetPasswordContent;

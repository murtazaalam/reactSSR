import { Avatar, Box, Grid, Typography, Container } from "@mui/material";
import React, { useState } from "react";
import "./otp.css";

function OtpContent() {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    console.log(otp);
    if (element.nextSibling) element.nextSibling.focus();
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          src="https://i.ibb.co/jVR0Kyc/logo-3.png"
          sx={{ m: 1, borderRadius: "0" }}
        />

        <Typography variant="h5" sx={{ mb: 3 }}>
          Verify Mobile Number
        </Typography>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item xs={6}>
            <p>Enter OTP</p>
          </Grid>
          <Grid item xs={6}>
            <a href="#">Resend OTP</a>
          </Grid>
          <Grid item xs={12}>
            <div className="otp">
              {otp.map((data, index) => (
                <input
                  className="otp-input"
                  type="text"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>
          </Grid>
          <button
            style={{
              backgroundColor: "var(--color-disable)",
            }}
            className={`btn-grad full-width`}
            // disabled={loader ? true : false}
            // onClick={props.handleProceed}
          >
            {/* {loader ? <img src={ButtonLoader} width="80" /> : "SignUp"} */}
            Verify and Proceed
          </button>
        </Grid>
      </Box>
    </Container>
  );
}

export default OtpContent;

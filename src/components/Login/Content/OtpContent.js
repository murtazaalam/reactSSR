import { Avatar, Box, Grid, Typography, Container } from "@mui/material";
import React, { useState } from "react";
import "./otp.css";

function OtpContent(props) {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    console.log(element);
    if (element.nextSibling) element.nextSibling.focus();
    console.log(">otp", otp);
  };
  const handleKeyMovement = (e) => {
    console.log(e);
    if (e.keyCode === 39 && e.target.nextSibling) e.target.nextSibling.focus();
    if (e.keyCode === 37 && e.target.previousSibling)
      e.target.previousSibling.focus();
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

        <Typography variant="h5" sx={{ mb: 3 }} className="weightBold">
          {props.title}
        </Typography>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid container justifyContent="space-between">
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              className="text-align-left"
            >
              <p
                className="weightBold fontSize-lg"
                style={{ marginBottom: "0" }}
              >
                {props.heading}
              </p>

              <p className="fontSize-sm" style={{ width: "233px" }}>
                {props.subHeading}
              </p>
            </Box>

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
                  onKeyDown={(e) => handleKeyMovement(e)}
                />
              ))}
            </div>
          </Grid>
          <button
            // style={{
            //   backgroundColor: "var(--color-disable)",
            // }}
            className={`btn-grad full-width`}
            // disabled={loader ? true : false}
            onClick={(e) => props.handleVerify(e, 3)}
          >
            {/* {loader ? <img src={ButtonLoader} width="80" /> : "SignUp"} */}
            Verify Code
          </button>
        </Grid>
      </Box>
    </Container>
  );
}

export default OtpContent;

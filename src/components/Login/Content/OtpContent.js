import { Avatar, Box, Grid, Typography, Container } from "@mui/material";
import ButtonLoader from "../../../assets/images/button_loader.gif";
import { cartAction } from "../../../redux/slices/cart.slice";
import { loginAction } from "../../../redux/slices/auth.slices";
import getFromCartApi from "../../../apis/api/GetFromCart";

import { useNavigate } from "react-router-dom";
import VerifyOtp from "../../../apis/api/VerifyOtp";
import { useRecoilState } from "recoil";
import { userAuth } from "../../../recoil/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "./otp.css";

function OtpContent(props) {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [error, setError] = useState("");
  const [, setUser] = useRecoilState(userAuth);
  const [OTP, setOTP] = useState();
  // const [OtpContent, setOtpContent] = useState();
  const [loader, setLoader] = React.useState(false);
  const [, setCartData] = React.useState();
  const [, setLoading] = React.useState();
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    console.log(element);
    if (element.nextSibling) element.nextSibling.focus();
  };
  console.log(">otp", otp);
  const handleKeyMovement = (e) => {
    // console.log(e);
    if (e.keyCode === 39 && e.target.nextSibling) e.target.nextSibling.focus();
    if (e.keyCode === 37 && e.target.previousSibling)
      e.target.previousSibling.focus();
  };
  const emptyState = () => {
    setOTP();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    let body = {
      phone: props.phone,
      otp: otp.join("").toString(),
    };
    console.log(body);
    if (!body.phone || !body.otp) {
      setLoader(false);
      toast.error("OTP Required", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return setError("OTP Required");
    }

    let res = await VerifyOtp(body, setError, setOTP, setLoader);
    console.log(error);
    if (error) {
      console.log(error);
      emptyState();
      // otpContent(event, 1, OTP);
      toast.warn(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (res) {
      console.log(res);
      if (res.message === "Registration Successful") {
        setUser(true);
        emptyState();
        toast.success("Registration Successful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch(loginAction({ admin: res.user }));
        let data = await getFromCartApi(setCartData, setLoading, setError);
        dispatch(cartAction({ cartCount: data?.length }));
        navigate("/");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmit}
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
            style={
              loader
                ? { backgroundColor: "var(--color-disable)" }
                : { backgroundColor: "var(--color-secondary)" }
            }
            className={`btn-grad full-width`}
            disabled={loader ? true : false}

            // onClick={(e) => props.handleVerify(e, 3)}
          >
            {loader ? <img src={ButtonLoader} width="80" alt="" /> : "SignUp"}
            Verify Code
          </button>
        </Grid>
      </Box>
    </Container>
  );
}

export default OtpContent;

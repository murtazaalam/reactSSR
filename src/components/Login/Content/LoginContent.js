import * as React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  InputAdornment,
  IconButton,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  Radio,
  Avatar,
} from "@mui/material";
import Visibility from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";

import ButtonLoader from "../../../assets/images/button_loader.gif";

import { cartAction } from "../../../redux/slices/cart.slice";
import { loginAction } from "../../../redux/slices/auth.slices";

import getFromCartApi from "../../../apis/api/GetFromCart";
import LoginApi from "../../../apis/api/Login";

import { useRecoilState } from "recoil";
import { userAuth } from "../../../recoil/store";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  btnLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
}));

export default function LoginContent({ otpContent }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [, setUser] = useRecoilState(userAuth);
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [validatePhone, setValidatePhone] = useState(false);
  const [validatePassword, setvalidatePassword] = useState(false);
  const [OTP, setOTP] = useState();
  const [loader, setLoader] = React.useState(false);
  const [, setCartData] = React.useState();
  const [, setLoading] = React.useState();
  const [showPassword, setShowPassword] = useState("");
  // const [y, setY] = React.useState([]);

  const classes = useStyles();
  let dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const emptyState = () => {
    setPhone("");
    setPassword("");
  };
  const validation = (event) => {
    if (event.target.name === "phone") {
      setPhone(event.target.value);
      let num = event.target.value;
      if (num.toString().length !== 10) {
        return setValidatePhone(true);
      }
      setValidatePhone(false);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
      if (!event.target.value) return setvalidatePassword(true);
      setvalidatePassword(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    let body = {
      phone: phone,
      password: password,
    };
    if (!body.phone || !body.password) {
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
    let res = await LoginApi(body, setError, setOTP, setLoader);
    console.log(error);
    if (res && res.status === 404) {
      console.log(res.data.otp);
      // emptyState();
      otpContent(event, 1, OTP, phone);
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

    if (res && res.message === "Login Success") {
      setUser(true);
      emptyState();
      toast.success("Login Success", {
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
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, borderRadius: "0" }}
          src="https://i.ibb.co/jVR0Kyc/logo-3.png"
        ></Avatar>
        <Typography variant="h5" className="weightBold">
          Sign In
        </Typography>
        {error === "Login Success" && (
          <Typography
            component="p"
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "success.dark",
            }}
          >
            {error}
          </Typography>
        )}
        {error !== "Login Success" && (
          <Typography
            component="p"
            variant="p"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "error.dark",
            }}
          >
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="PHONE"
            label="Phone Number"
            name="phone"
            value={phone}
            type="number"
            min="10"
            max="10"
            onChange={(e) => validation(e)}
            autoFocus
            error={validatePhone}
            helperText={validatePhone ? "Invalid phone number." : ""}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            className={classes.root}
            value={password}
            onChange={(e) => validation(e)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={validatePassword}
            helperText={validatePassword ? "Enter Password." : ""}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <Radio />
              Remember me{" "}
            </span>
            <Link to="/forget-password">Forget password?</Link>
          </div>

          <button
            type="submit"
            style={
              loader
                ? { backgroundColor: "var(--color-disable)" }
                : { backgroundColor: "var(--color-secondary)" }
            }
            disabled={loader ? true : false}
            className={`btn-grad full-width ${classes.btnLogin}`}
          >
            {loader ? <img src={ButtonLoader} width="80" alt="" /> : "Sign In"}
          </button>

          {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid> */}
        </Box>
      </Box>
    </Container>
  );
}

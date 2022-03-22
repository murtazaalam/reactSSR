import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { toast } from "react-toastify";
import UpdatePassword from "../../apis/api/UpdatePassword";
import Visibility from "@material-ui/icons/Visibility";
import ButtonLoader from "../../assets/images/button_loader.gif";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";
function ResetPassword(props) {
  // const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, validateConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReEnteredPassword, setShowReEnteredPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const [newPassword, validatePassword] = useState(false);
  const [message, validationMessage] = useState("");

  const [error, setError] = useState("");
  const handleClickShowPassword = () => setShowNewPassword(!showNewPassword);
  const handleMouseDownPassword = () => setShowNewPassword(!showNewPassword);
  const handleClickShowReenteredPassword = () =>
    setShowReEnteredPassword(!showReEnteredPassword);
  const handleMouseDownReenteredPassword = () =>
    setShowReEnteredPassword(!showReEnteredPassword);

  const [pass, setPass] = useState("");

  const validation = (event) => {
    if (event.target.name === "newPassword") {
      let strongPassword =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

      if (!event.target.value) {
        validatePassword(true);
        return validationMessage("Enter Password");
      }
      if (!event.target.value.match(strongPassword)) {
        validatePassword(true);
        return validationMessage(
          "Password must contain at least one numeric, one uppercase, one lowercase and one special character"
        );
      }
      validatePassword(false);
      setPass(event.target.value);
    }
    if (event.target.name === "confirmPassword") {
      console.log(pass);
      console.log(event.target.value);
      console.log(event.target.value !== pass);
      if (event.target.value !== newPassword) {
        validateConfirmPassword(true);
        return validationMessage(
          "Re-Entered Password does not match with the new password"
        );
      }
      validateConfirmPassword(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    setLoader(true);
    setError("");

    let body = {
      phone: props.phone,
      password: data.get("newPassword"),
      forgotCode: props.otp,
    };
    if (!body.phone || !body.password) {
      setLoader(false);
      toast.error("Password Required", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return setError("Password Required");
    }
    if (!validateConfirmPassword && !validatePassword) {
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
    let res = await UpdatePassword(body, setError, setLoader);
    //  console.log(error);
    if (res && res.status === 200) {
      console.log(res);
      // emptyState();
      // otpContent(event, 3, res.data.forgotCode, contact);
      toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/auth-user");
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
          Reset Password
        </Typography>
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

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <TextField
            // className={classes.root}
            required
            fullWidth
            name="newPassword"
            label="newPassword"
            type={showNewPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="password"
            autoComplete="new-password"
            onChange={(e) => validation(e)}
            error={newPassword}
            helperText={newPassword ? message : ""}
          />
          <TextField
            required
            name="confirmPassword"
            type={showReEnteredPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowReenteredPassword}
                    onMouseDown={handleMouseDownReenteredPassword}
                  >
                    {showReEnteredPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="normal"
            fullWidth
            label="Confirm Password"
            // autoComplete="new-password"
            onChange={(e) => validation(e)}
            error={confirmPassword}
            helperText={confirmPassword ? message : ""}
            sx={{ mb: 6 }}
          />

          <button
            type="submit"
            style={
              loader
                ? { backgroundColor: "var(--color-disable)" }
                : { backgroundColor: "var(--color-secondary)" }
            }
            disabled={loader ? true : false}
            className={`btn-grad full-width `}
          >
            {loader ? <img src={ButtonLoader} alt="" width="80" /> : "SignUp"}
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;

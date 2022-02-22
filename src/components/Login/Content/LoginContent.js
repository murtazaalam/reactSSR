import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginApi from "../../../apis/api/Login";
import { useRecoilState } from "recoil";
import { userAuth } from "../../../recoil/store";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function LoginContent({ classes, handleClose }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const [user, setUser] = useRecoilState(userAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emptyState = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    let body = {
      email: email,
      password: password,
    };
    handleClose();
    emptyState();
    if (!body.email || !body.password)
      return setError("Email And Password Required");
    LoginApi(body, setError, setLoading, setUser);
    if (error === "Login Success") {
      setUser(true);
      window.location.reload();
      console.log(user);
    }
    // event.preventDefault();
    // setError("");
    // let body = {
    //   email: email,
    //   password: password,
    // };
    // emptyState();
    // if (!body.email || !body.password)
    //   return setError("Email And Password Required");
    // let res = await LoginApi(body, setError, setLoading, setUser);
    // if (res === "Login Success") {
    //   setUser(true);
    //   //window.location.reload();
    //   toast.success(res, {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    //   navigate("/", { state: { openModel: false } });
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <Avatar sx={{ m: 1, borderRadius: "0", background: "white" }}>
            <img src="https://i.ibb.co/jVR0Kyc/logo-3.png" alt=""></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              className={classes.root}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              className={classes.root}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button
              type="submit"
              className="btn-grad full-width"
              style={{ marginTop: "10px" }}
            >
              Log In
            </button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

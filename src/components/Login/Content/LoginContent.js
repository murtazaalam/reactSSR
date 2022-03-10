import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoginApi from "../../../apis/api/Login";
import ButtonLoader from "../../../assets/images/button_loader.gif";
import { useRecoilState } from "recoil";
import { userAuth } from "../../../recoil/store";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/slices/auth.slices";
import { cartAction } from "../../../redux/slices/cart.slice";
import getFromCartApi from "../../../apis/api/GetFromCart";
import Radio from "@mui/material/Radio";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  btnLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
}));

export default function LoginContent(props) {
  const [error, setError] = useState("");
  const [users, setUser] = useRecoilState(userAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [validatePassword, setvalidatePassword] = useState(false);
  const [loader, setLoader] = React.useState(false);
  const [cartData, setCartData] = React.useState();
  const [loading, setLoading] = React.useState();
  const [y, setY] = React.useState([]);
  const classes = useStyles();
  let dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyState = () => {
    setEmail("");
    setPassword("");
  };
  const validation = (event) => {
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (event.target.name === "email") {
      setEmail(event.target.value);
      if (!event.target.value.match(emailValidate))
        return setValidateEmail(true);
      setValidateEmail(false);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
      if (event.target.value == "") return setvalidatePassword(true);
      setvalidatePassword(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError("");
    let body = {
      email: email,
      password: password,
    };
    if (!body.email || !body.password) {
      setLoader(false);
      return setError("Email And Password Required");
    }
    if (validateEmail === true) {
      setLoader(false);
      return setError("Invalid Email");
    }
    let res = await LoginApi(body, setError, setLoader);
    if (res) {
      if (res.message === "Login Success") {
        setUser(true);
        emptyState();
        //window.location.reload();
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => validation(e)}
            autoFocus
            error={validateEmail}
            helperText={validateEmail ? "Invalid Email." : ""}
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
            onChange={(e) => validation(e)}
            autoComplete="current-password"
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

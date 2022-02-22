import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RegisterApi from "../../../apis/api/SignUp";

const theme = createTheme();

export default function SignUp({ classes }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setError("");
    // eslint-disable-next-line no-console
    let body = {
      name: data.get("firstName") + " " + data.get("lastName"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      password: data.get("password"),
    };
    if (!body.name || !body.email || !body.mobile || !body.password) {
      return setError("Star Fields Are Required");
    } else {
      if (body.mobile.length !== 10 || !Number(body.mobile))
        return setError("Invalid Mobile Number");
      if (body.password !== data.get("repassword"))
        return setError("Password Does Not Match");
      RegisterApi(body, setError, setLoading);
    }
    //RegisterApi(body, setError, setLoading);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, borderRadius: "0", background: "white" }}>
            <img src="https://i.ibb.co/jVR0Kyc/logo-3.png" alt=""></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Signup
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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.root}
                  required
                  fullWidth
                  name="repassword"
                  label="Re Enter Password"
                  type="password"
                  id="re-password"
                  autoComplete="re-password"
                />
              </Grid>
            </Grid>
            <button
              className="btn-grad full-width"
              style={{ marginTop: "20px" }}
            >
              Sign Up
            </button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

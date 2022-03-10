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

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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

        <Box component="form" noValidate sx={{ mt: 4 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="New Password"
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoFocus
          />
          <TextField
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
            margin="normal"
            fullWidth
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ mb: 6 }}
          />

          <button
            type="submit"
            // style={{ backgroundColor: "var(--color-disable)" }}
            className={`btn-grad full-width btn-disabled`}
            disabled
          >
            Proceed
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default ResetPassword;

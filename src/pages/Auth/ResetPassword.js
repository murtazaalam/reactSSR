import React, { useState } from "react";
import AuthLayout from "../../components/Login/AuthLayout";
import { Container, Typography, Box, Avatar, TextField } from "@mui/material";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AuthLayout>
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
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              label="Confirm Password"
              type="password"
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
    </AuthLayout>
  );
}

export default ResetPassword;

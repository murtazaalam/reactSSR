import React, { useState } from "react";
import { Avatar, Box, TextField, Typography, Container } from "@mui/material";

function ForgetPasswordContent(props) {
  const [contact, setContact] = useState();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, borderRadius: "0" }}
          src="https://i.ibb.co/jVR0Kyc/logo-3.png"
        />

        <Typography variant="h5" className="weightBold">
          Forgot Password?
        </Typography>
        <Typography
          className="fontSize-sm"
          align="center"
          sx={{ mt: 3, mb: 5 }}
        >
          Enter Mobile number associated with your account{" "}
        </Typography>
      </Box>

      <Box component="form">
        <TextField
          required
          fullWidth
          name="contact"
          type="number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          autoFocus
          label="Enter Mobile Number"
          sx={{ mb: 4 }}
        />

        <button
          className="btn-grad full-width "
          onClick={(e) => props.handleModal(e, 2)}
        >
          Send Code
        </button>
      </Box>
    </Container>
  );
}

export default ForgetPasswordContent;

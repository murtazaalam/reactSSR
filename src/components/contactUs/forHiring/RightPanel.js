import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function RightPanel() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNo: Number,
    profileRequired: [],
  });
  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          label="Enter Your Good Name"
          required
        />
        <TextField
          id="outlined-basic"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          label="Enter your Email Address"
        />
        <TextField
          id="outlined-basic"
          value={info.phoneNo}
          onChange={(e) => setInfo({ ...info, phoneNo: e.target.value })}
          label="Enter your Mobile Number"
        />
        <TextField
          id="outlined-basic"
          value={info.profileRequired}
          onChange={(e) =>
            setInfo({ ...info, profileRequired: e.target.value })
          }
          label="Job Profile Required"
        />
        <button className="btn-grad">Submit</button>
      </form>
    </>
  );
}

export default RightPanel;

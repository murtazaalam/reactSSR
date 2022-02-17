import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import "./rightPanel.css";
function RightPanel() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNo: Number,
    profileRequired: [],
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(info);
  };
  return (
    <>
      <form onSubmit={submitForm} className="right-panel-form">
        <FormControl className="input-margin">
          <InputLabel htmlFor="name">Enter Your Good Name</InputLabel>
          <OutlinedInput
            id="name"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            label="Enter Your Good Name"
            required
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <OutlinedInput
            id="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            label="Email Address"
            required
            endAdornment={
              <InputAdornment position="end">
                <EmailIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <InputLabel htmlFor="phoneNo">Mobile number</InputLabel>
          <OutlinedInput
            id="phonNo"
            value={info.phoneNo}
            onChange={(e) => setInfo({ ...info, phoneNo: e.target.value })}
            label="phone number"
            required
            endAdornment={
              <InputAdornment position="end">
                <PhoneAndroidIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className="input-margin">
          <Autocomplete
            multiple
            id="tags-filled"
            options={data.map((option) => option.title)}
            defaultValue={[data[1].title]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Profiles"
                placeholder="Job Profiles "
                value={info.profileRequired}
                onChange={(e) => {
                  console.log(params.inputProps.value);
                  setInfo({
                    ...info,
                    profileRequired: [
                      ...info.profileRequired,
                      params.inputProps.value,
                    ],
                  });
                }}
              />
            )}
          />
        </FormControl>

        <button className="btn-grad">Submit</button>
      </form>
    </>
  );
}

export default RightPanel;
const data = [
  { title: "Full Stack Developer" },
  { title: "Software Developer" },
  { title: "Machine Learning Engg" },
  { title: "Graduate Trainee" },
];

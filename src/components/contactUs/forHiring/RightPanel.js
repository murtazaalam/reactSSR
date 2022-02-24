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
    phone: "",
    profileRequired: [],
  });
  const submitForm = (e) => {
    e.preventDefault();
    console.log(info);

  };
  const formValidate = (event) => {
    //setInfo({...info, name: value})
    if(event.name === "name") setInfo({...info, name: event.value});
    if(event.name === "email") setInfo({...info, email: event.value});
    if(event.name === "phone") setInfo({...info, phone: event.value});
  }
  return (
    <>
      <form onSubmit={submitForm} className="right-panel-form">
        <FormControl className="input-margin">
          <InputLabel htmlFor="name">Enter Your Good Name</InputLabel>
          <OutlinedInput
            id="name"
            value={info.name}
            onChange={(e) => formValidate(e.target)}
            label="Enter Your Good Name"
            name="name"
            error
            helperText={"Invalid Email."}
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
            name="email"
            onChange={(e) => formValidate(e.target)}
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
          <InputLabel htmlFor="phoneNo" error>Mobile number</InputLabel>
          <OutlinedInput
            id="phonNo"
            value={info.phone}
            onChange={(e) => formValidate(e.target)}
            label="phone number"
            name="phone"
            type="number"
            required
            error
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

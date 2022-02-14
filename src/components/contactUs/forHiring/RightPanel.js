import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

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
          required
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          label="Enter your Email Address"
        />
        <TextField
          id="outlined-basic"
          required
          value={info.phoneNo}
          onChange={(e) => setInfo({ ...info, phoneNo: e.target.value })}
          label="Enter your Mobile Number"
        />
        {/* <Autocomplete
          multiple
          id="tags-filled"
          // options={top100Films.map((option) => option.title)}
          // defaultValue={[top100Films[13].title]}
          value={info.profileRequired}
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
              variant="filled"
              label="freeSolo"
              placeholder="Favorites"
            />
          )} */}
        {/* /> */}
        <TextField
          id="outlined-basic"
          required
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

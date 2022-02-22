import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import LoginContent from "./Content/LoginContent";
import SignUp from "./Content/SignUpContent";

function Login({ open, handleClose, PaperComponent }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {" "}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <TabContext value={value}>
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Login" value="1" />
                <Tab label="SignUp" value="2" />
              </TabList>
            </Box>
          </DialogTitle>
          <DialogContent>
            <TabPanel value="1">
              <LoginContent />
            </TabPanel>
            <TabPanel value="2">
              <SignUp />
            </TabPanel>
          </DialogContent>
        </TabContext>
      </Dialog>
    </div>
  );
}

export default Login;

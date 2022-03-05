import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ButtonLoader from "../../assets/images/button_loader.gif";
import singleEventApi from "../../apis/api/SingleEvent";
import addEventApi from "../../apis/api/AddEvent";
import Loader from "../Loader";
import "./singleEvent.css";

const useStyles = makeStyles({
  root: {
    // input label when focused
    "& label.Mui-focused": {
      color: "#ea395d",
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ea395d",
    },
    // // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#ea395d",
    },
    // // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ea395d",
      },
    },
  },
  sectionPadding: {
    padding: "10px 52px",
  },
});
const SingleEvent = () => {
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [loader, setLoader] = useState(false);
  const [allError, setAllError] = useState();
  const [event, setEventData] = useState();

  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  const params = useParams();
  const classes = useStyles();

  let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [info, setInfo] = useState({
    name: isLogin ? admin.name : "",
    email: isLogin ? admin.email : "",
    phone: isLogin ? admin.phone : "",
  });

  useEffect(() => {
    if (!event) {
      singleEventApi(params.id, setEventData);
    }
  }, []);
  console.log(admin);

  const formValidate = (event) => {
    if (event.name === "name") {
      setInfo({ ...info, name: event.value });
      if (event.value == "") return setNameError(true);
      setNameError(false);
    }
    if (event.name === "email") {
      setInfo({ ...info, email: event.value });
      if (event.value == "" || !event.value.match(emailValidate))
        return setEmailError(true);
      setEmailError(false);
    }
    if (event.name === "phone") {
      setInfo({ ...info, phone: event.value });
      if (event.value != "" && event.value.length === 10)
        return setPhoneError(false);
      setPhoneError(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAllError("");
    setLoader(true);
    if (!info.name || !info.email || !info.phone) {
      setAllError("Star fields are required.");
      setLoader(false);
      return;
    }
    if (nameError === false && emailError === false && phoneError === false) {
      let res = await addEventApi(info, setLoader);
      toast.success(res, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setLoader(false);
  };
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg)`,
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">Event</li>
              <li className="breadcrumb-item active">{event?.name}</li>
            </ol>
          </nav>

          <h1 className="event-heading">{event?.name}</h1>
        </div>
      </Box>

      {event ? (
        <Box
          component="div"
          sx={{ flexGrow: 1, mt: 2, mb: 2 }}
          className="event-box"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={2} xl={2}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Description
              </Typography>
              <div>
                <img src={event?.event_image} className="hover" alt="" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6}>
              {console.log(event.description)}
              {event &&
                event.description.map((data, index) => (
                  <>
                    <Typography variant="h6" sx={{ lineHeight: "28px", pt: 3 }}>
                      {data?.title}
                    </Typography>
                    {data.detail &&
                      data.detail.map((d, i) => (
                        <Typography style={{ lineHeight: "28px" }}>
                          {d}
                        </Typography>
                      ))}
                  </>
                ))}
            </Grid>

            {event?.category === "upcoming" && (
              <Grid item xs={12} sm={12} md={4} xl={4}>
                <Card sx={{ p: 2 }} className="event-form">
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <p className="all-error">{allError}</p>
                    <TextField
                      margin="normal"
                      required
                      error={nameError}
                      fullWidth
                      id="name"
                      label="Enter Name"
                      name="name"
                      autoComplete="name"
                      helperText={nameError ? "Enter Your Name." : ""}
                      value={isLogin ? admin?.name : info?.name}
                      disabled={isLogin ? true : false}
                      className={classes.root}
                      onChange={(e) => formValidate(e.target)}
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      error={emailError}
                      helperText={emailError ? "Invalid Email." : ""}
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      disabled={isLogin ? true : false}
                      value={isLogin ? admin?.email : info?.email}
                      className={classes.root}
                      onChange={(e) => formValidate(e.target)}
                    />

                    <TextField
                      margin="normal"
                      required
                      error={phoneError}
                      helperText={phoneError ? "Invalid Phone Number." : ""}
                      fullWidth
                      name="phone"
                      disabled={isLogin ? true : false}
                      label="phone"
                      type="number"
                      id="phone"
                      className={classes.root}
                      value={isLogin ? admin.phone : info.phone}
                      onChange={(e) => formValidate(e.target)}
                      autoComplete="current-phoneNumber"
                    />

                    <button
                      type="submit"
                      className="btn-grad full-width event-register"
                      style={
                        loader
                          ? { backgroundColor: "var(--color-disable)" }
                          : { backgroundColor: "var(--color-secondary)" }
                      }
                      disabled={loader ? true : false}
                    >
                      {loader ? (
                        <img src={ButtonLoader} width="80" />
                      ) : (
                        "Register Now"
                      )}
                    </button>
                  </Box>
                </Card>
              </Grid>
            )}
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default SingleEvent;

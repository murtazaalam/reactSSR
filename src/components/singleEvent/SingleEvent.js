import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import singleEventApi from "../../apis/api/SingleEvent";
import { useSelector, useDispatch } from "react-redux";
import Chip from '@mui/material/Chip';
import addEventApi from "../../apis/api/AddEvent";
import addToCartApi from "../../apis/api/AddToCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import ButtonLoader from "../../assets/images/button_loader.gif";
import { cartAction } from "../../redux/slices/cart.slice";
import { logoutAction } from "../../redux/slices/auth.slices";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import Login from "../../components/Login/Login";
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

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const SingleEvent = ({isEventBaught}) => {
  const [event, setEventData] = useState();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [loader, setCartLoader] = useState(false);
  const [cartData, setCartData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [open, setOpen] = React.useState(false);
  const [y, setY] = useState([]);
  const params = useParams();
  const classes = useStyles();

  let dispatch = useDispatch();
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (!event) {
      singleEventApi(params.id, setEventData);
    }
  }, []);
  console.log(admin);

  const handleClose = () => {
    setOpen(false);
  };

  const addToCart = async (id) => {
    setCartLoader(true);
    let body = {
      course_type: "event",
      event_name: event.name,
      event_description: event.description,
      event_image: event.event_image,
      event_date: event.date,
      price: event.price ? event.price : 0,
      event_id: id,
    };
    let message = await addToCartApi(body, setCartLoader);
    if (message === "Item Already Added") {
      toast.warn("Event already added ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (message === "Item Added"){
      toast.success("Event added to your cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let data = await getFromCartApi(setCartData, setY, setLoading, setError);
      dispatch(cartAction({cartCount:data?.length}))
    }
    else if (message === "Unauthorized") {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCartLoader(false);
      dispatch(logoutAction());
      setOpen(true);
    } else {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCartLoader(false);
      dispatch(logoutAction());
      setOpen(true);
    }
    
  };

  // const formValidate = (event) => {
  //   if (event.name === "name") {
  //     setInfo({ ...info, name: event.value });
  //     if (event.value == "") return setNameError(true);
  //     setNameError(false);
  //   }
  //   if (event.name === "email") {
  //     setInfo({ ...info, email: event.value });
  //     if (event.value == "" || !event.value.match(emailValidate))
  //       return setEmailError(true);
  //     setEmailError(false);
  //   }
  //   if (event.name === "phone") {
  //     setInfo({ ...info, phone: event.value });
  //     if (event.value != "" && event.value.length === 10)
  //       return setPhoneError(false);
  //     setPhoneError(true);
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setAllError("");
  //   setLoader(true);
  //   if (!info.name || !info.email || !info.phone) {
  //     setAllError("Start fields are required.");
  //     setLoader(false);
  //     return;
  //   } else {
  //     if (nameError === false && emailError === false && phoneError === false) {
  //       let res = await addEventApi(info, setLoader);
  //       toast.success(res, {
  //         position: "bottom-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     } else {
  //       setLoader(false);
  //     }
  //   }
  // };
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
          <Chip label={event?.price ? event?.price : 'Free'} sx={{background: `var(--color-secondary)`,color:'#fff'}} />
        </div>
      </Box>
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
            {!isEventBaught ? 
            <button
              type="button"
              onClick={() => addToCart(event._id)}
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
                "Add To Cart"
              )}
            </button>:
            <button
              type="button"
              className="btn-grad full-width btn-purchased"
            >
              Purchased
            </button>
            }
            <Login
              open={isLogin ? false : open}
              handleClose={handleClose}
              PaperComponent={PaperComponent}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={10} xl={10}>
            {event &&
              event.description?.map((data, index) => (
                <>
                  <Typography variant="h6" sx={{ lineHeight: "28px", pt: 3 }}>
                    {data?.title}
                  </Typography>
                  {data?.detail.map((d, i) => (
                    <Typography style={{ lineHeight: "28px" }}>{d}</Typography>
                  ))}
                </>
              ))}
          </Grid>
          {/* {event?.category === "upcoming" && (
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
                    value={info.name}
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
                    value={info.email}
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
          )} */}
        </Grid>
      </Box>
    </>
  );
};
export default SingleEvent;

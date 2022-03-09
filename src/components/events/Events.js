import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import { CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import EventImage from "../../assets/images/event_icon_demo.svg";
import eventsApi from "../../apis/api/GetEvents";
import addToCartApi from "../../apis/api/AddToCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../redux/slices/cart.slice";
import { logoutAction } from "../../redux/slices/auth.slices";
import Login from "../../components/Login/Login";
import Draggable from "react-draggable";
import Paper from "@mui/material/Paper";
import "./events.css";
import Chip from "@mui/material/Chip";
import Loading from "../Loader";
import myOrdersApi from "../../apis/api/MyOders";

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

const Events = (props) => {
  const [events, setEventData] = useState();
  const [upcomingTab, setUpcomingTab] = useState(true);
  const [pastTab, setPastTab] = useState(false);
  const [loading, setLoading] = useState();
  const [loader, setCartLoader] = useState(false);
  const [cartData, setCartData] = useState();
  const [y, setY] = useState([]);
  const [baughtEvent, setCourse] = useState([])
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  let dispatch = useDispatch();
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  let baughtEventOnly = [];

  useEffect( async() => {
    let allEventData = await eventsApi(props.category, setEventData, setLoading, setError) || []
    console.log("out",allEventData)
    if(isLogin){
      let baughtData = await myOrdersApi(setCourse, setLoading, setError);
      if(baughtData){
        baughtEventOnly = baughtData.filter((item) => {
          return item.data.course_type === "event"
        });
        setCourse(baughtEventOnly);
      }
      let courseId = baughtEventOnly.map((item) => {
        return String(item.data.event_id)
      })
      let newList = [];
      for (const item of allEventData) {
        let flag = courseId.includes(String(item._id));
        newList.push({...item, isBaught:flag})
      }
      setEventData(newList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const setEventCategory = async(category) => {
    setEventData([]);
    let upcomingEvent = await eventsApi(category, setEventData, setLoading, setError);
    if (category === "upcoming") {
      setUpcomingTab(true);
      setPastTab(false);
      if(isLogin){
        let baughtData = await myOrdersApi(setCourse, setLoading, setError);
        if(baughtData){
          baughtEventOnly = baughtData.filter((item) => {
            return item.data.course_type === "event"
          });
          setCourse(baughtEventOnly);
        }
        let courseId = baughtEventOnly.map((item) => {
          return String(item.data.event_id)
        })
        let newList = [];
        for (const item of upcomingEvent) {
          let flag = courseId.includes(String(item._id));
          newList.push({...item, isBaught:flag})
        }
        setEventData(newList)
      }
    } else {
      setUpcomingTab(false);
      setPastTab(true);
    }
  };

 
  const addToCart = async (id) => {
    setCartLoader(true);
    const singleEvent = events.filter((item) => {
      return item._id === id
    });
    let body = {
      course_type: "event",
      event_name: singleEvent[0].name,
      event_description: singleEvent[0].description,
      event_image: singleEvent[0].event_image,
      event_date: singleEvent[0].date,
      price: singleEvent[0].price ? singleEvent[0].price : null,
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
  return (
    <>
      <Box
        component="section"
        className="page-heading course-mobile-view"
        sx={{
          // background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg)`,
          background: `#1C477C url(${
            window.matchMedia("(max-width: 668px)").matches
              ? ""
              : "https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg"
          }) 0 0 no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <p className="home">
                  Home
                  <div className="line"></div>
                </p>
              </li>
              <li className="breadcrumb-item active">Events</li>
            </ol>
          </nav>
          <h1 className="event-heading">Events</h1>
        </div>
      </Box>
      {!loading ? (
        <Box component="section" className="courses-area">
          <Box component="div" className="event-aria">
            <Typography component="h3">Events</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", paddingTop: "20px" }}
            className="event-body"
          >
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <Box component="div" className="row event-menu">
                <Typography
                  component="h6"
                  style={
                    upcomingTab
                      ? { fontWeight: 800, color: "var(--color-secondary)" }
                      : { fontWeight: 600, color: "black" }
                  }
                  onClick={() => setEventCategory("upcoming")}
                >
                  Upcoming Events
                </Typography>
                <Typography
                  component="h6"
                  style={
                    pastTab
                      ? { fontWeight: 800, color: "var(--color-secondary)" }
                      : { fontWeight: 600, color: "black" }
                  }
                  onClick={() => setEventCategory("past")}
                >
                  Past Events
                </Typography>
              </Box>

              <Box component="h6" className=""></Box>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-6 col-12">
              {events ? (
                events.map((event, index) => {
                  return (
                    
                      <Card
                        sx={{ width: "355px", minHeight: 320 }}
                        className="event-card-box"
                        key={index}
                      >
                        <Link
                            to={`/event/${event._id}`}
                            style={{ textDecoration: "none", 
                            color: "#1c477c" }}
                          >
                          <CardMedia
                            className="event-card"
                            image={EventImage}
                            sx={{ objectFit: "scale-down", height: 200 }}
                            component="img"
                          ></CardMedia>
                        </Link>
                        <CardContent>
                          {/* for dynamic use below code */}
                          {/* <img src={`${event.image}`} width="100"/> */}
                          <Link
                            to={`/event/${event._id}`}
                            style={{ textDecoration: "none", 
                            color: "#1c477c" }}
                          >
                            <Typography component="h6" className="event-name">
                              {event.name}
                            </Typography>
                          </Link>
                        </CardContent>
                        <CardActions sx={{ flexDirection: "column" }}>
                          <Typography 
                            component="div" 
                            className="event-details"
                            sx={{paddingBottom: '10px'}}
                          >
                            <Chip label={event.date} />

                            {event.category === "upcoming" && (
                              <Typography component="p">
                                
                                  {event.isBaught ? 
                                    <Button
                                      className="btn-grad btn-design btn-purchased"
                                      size="small"
                                      sx={{ color: "#fff", height: "34px" }}
                                    >
                                      Purchased
                                    </Button>:
                                    <Button
                                      className="btn-grad btn-design"
                                      size="small"
                                      sx={{ color: "#1c477c", height: "34px" }}
                                      onClick={() => addToCart(event._id)}
                                    >
                                      Add To Cart
                                    </Button>}
                                {/* <Button
                                    className="btn-grad btn-design"
                                    size="small"
                                    sx={{ color: "#1c477c" }}
                                    onClick={() => addToCart(event._id)}
                                  >
                                    Add To Cart
                                  </Button> */}
                              </Typography>
                            )}
                            {event.category === "past" && (
                              <Typography component="p">
                                <Link
                                  to={`/event/${event._id}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button
                                    className="btn-grad btn-design"
                                    size="small"
                                    sx={{ color: "#1c477c" }}
                                  >
                                    See Detail
                                  </Button>
                                </Link>
                              </Typography>
                            )}
                          </Typography>
                        </CardActions>
                      </Card>
                  );
                })
              ) : (
                <h1>No Event Available</h1>
              )}
            </div>
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
      <Login
        open={isLogin ? false : open}
        handleClose={handleClose}
        PaperComponent={PaperComponent}
      />
    </>
  );
};
export default Events;

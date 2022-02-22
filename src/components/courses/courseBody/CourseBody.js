import * as React from "react";
import { useState, useEffect } from "react";
import { Tab, Typography, Box } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import Badge from "@material-ui/core/Badge";

import Draggable from "react-draggable";
import Skeleton from "@mui/material/Skeleton";

import addToCartApi from "../../../apis/api/AddToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./courseBody.css";
import Login from "../../Login/Login";
import Paper from "@mui/material/Paper";
import myOrdersApi from "../../../apis/api/MyOders";


import { RWebShare } from "react-web-share";
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
const CourseBody = ({ course }) => {
  const url = window.location.href;
  const [value, setValue] = useState("1");

  const [timeBadge, setTimerBadge] = useState(true);
  const [itemMessage, setItemMessage] = useState("");
  const [baughtCourses, setBaughtCourses] = useState([]);
  const [isBaughtCourse, setIsBaughtCourse]= useState(false);

  useEffect(() => {
    if(baughtCourses.length !== 0){ 
      myOrdersApi(setBaughtCourses);
      isBaught();
    }
  },[])
  const isBaught = () => {
    if(baughtCourses){
      baughtCourses.forEach(item => {
        console.log(item.course_id,course._id)
        if(item.course_id === course._id) setIsBaughtCourse(true);
      })
    }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //for timer

  const daysHoursMinSecs = { day: 2, hours: 0, minutes: 0, seconds: 30 };
  const { day = 0, hours = 0, minutes = 0, seconds = 60 } = daysHoursMinSecs;
  const [[days, hrs, mins, secs], setTime] = useState([
    day,
    hours,
    minutes,
    seconds,
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const tick = () => {
    if (days === 0 && hrs === 0 && mins === 0 && secs === 0)
      setTimerBadge(false);
    else if (hrs === 0 && mins === 0 && secs === 0) {
      setTime([days - 1, 23, 59, 59]);
    } else if (mins === 0 && secs === 0) {
      setTime([days, hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([days, hrs, mins - 1, 59]);
    } else {
      setTime([days, hrs, mins, secs - 1]);
    }
  };
  useEffect(() => {
    console.log(window.location.href);
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  },[]);
  
  // console.log(open);
  const addToCart = async (id) => {
    let body = {
      course_name: course.course_name,
      course_image: course.thumbnail,
      description: course.description,
      avg_rating: course.avg_rating,
      gradient: course.gradient,
      discount: course.discount,
      reviews: course.reviews,
      price: course.price,
      course_id: id,
    };
    let message = await addToCartApi(body);
    console.log(message);
    if (message === "Item Already Added") {
      toast.warn("Course already added ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (message === "Item Added")
      toast.success("Course added to your cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    else if (message === "Unauthorized") {
      setOpen(true);
      console.log(open);
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
    }
  };
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  return (
    <>
      <div className="course-tab-container">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Typography component="div">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box className="techvanto-service">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs"
                  className="services-tabs"
                >
                  <Tab label="Overview" value="1" />
                  <Tab label="Curriculum" value="2" />
                  {/* <Tab label="Review" value="3" /> */}
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row tab-desc">
                  <Typography component="h2">Course Description</Typography>
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>
                  <Typography component="h2">Learning Objectives</Typography>

                  {/* MAP Learning Objectives */}
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>

                  {/* Prerequisites */}
                  <Typography component="h2">Prerequisites </Typography>

                  {/* MAP Prerequisites  */}
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>

                  {/* Training Benefits */}
                  <Typography component="h2">Training Benefits</Typography>

                  {/* MAP Training Benefits */}
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {isEmpty(course) === false && (
                  <div className="curriculum">
                    {course.curriculum.map((curriculum, index) => {
                      return (
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className="curriculum-heading">
                              {curriculum.heading}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>{curriculum.detail}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </div>
                )}
              </TabPanel>
              {/* <TabPanel value="3">
              
              </TabPanel> */}
            </TabContext>
          </Box>
        </Typography>
        <div className="video-section">
          {!course ? (
            <Skeleton variant="rectangular" width={500} height={691} />
          ) : (
            <div className="video-box">
              {course && (
                <div className="video">
                  {course.thumbnail && (
                    <img src={course.thumbnail} className="img-fluid" alt="" />
                  )}
                  {/* {course.video && (
                    <iframe
                      src={course.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  )} */}
                  {!course.thumbnail && (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckyYf2C8fp95kgcVhT2L-gJgEz5_UUuIWnA&usqp=CAU"
                      className="img-fluid"
                      alt=""
                      style={{ width: "25rem" }}
                    />
                  )}
                </div>
              )}
              <div className="course-detail">
                {course && (
                  <div className="course-price">
                    {course.discount > 0 && (
                      <p>
                        Rs.&nbsp;
                        {timeBadge === true ? (
                          <>
                            <del>
                              <span>{course.price}</span>
                            </del>
                          </>
                        ) : (
                          <span>
                            <span>{course.price}</span>
                          </span>
                        )}
                        &nbsp;
                        {timeBadge === true ? (
                          <span className="updated-price">
                            <Badge
                              // ${days!== 0 && days.toString().padStart(1, "0")}d
                              badgeContent={` ${hrs
                                .toString()
                                .padStart(2, "0")}:${mins
                                .toString()
                                .padStart(2, "0")}:${secs
                                .toString()
                                .padStart(2, "0")}`}
                              color="primary"
                            >
                              {course.price - course.discount}
                            </Badge>
                          </span>
                        ) : (
                          ""
                        )}
                      </p>
                    )}
                    {course.discount === "0" && (
                      <p>
                        Rs.&nbsp;
                        <span>{course.price}</span>
                        <span>.99</span>
                      </p>
                    )}
                  </div>
                )}
                <div className="other">
                  <p>
                    <span className="icon">
                      <AccessAlarmIcon />
                    </span>
                    <span className="heading">Duration</span>
                  </p>
                  <p className="sub-heading">{course && course.duration} hours</p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <LocalLibraryIcon />
                    </span>
                    <span className="heading">Lession</span>
                  </p>
                  <p className="sub-heading">{course && course.lession} Lectures</p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <BookmarkIcon />
                    </span>
                    <span className="heading">Enrolled</span>
                  </p>
                  <p className="sub-heading">
                    {course && course.enrolled} Students
                  </p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <ChromeReaderModeIcon />
                    </span>
                    <span className="heading">Access</span>
                  </p>
                  <p className="sub-heading">{course && course.access}</p>
                </div>
                <div>
                  {/* <button onClick={handleClickOpen}>open</button>
                  <Login
                    open={open}
                    handleClose={handleClose}
                    PaperComponent={PaperComponent}
                  /> */}
                  {isBaughtCourse ?
                    <button
                    type="button"
                    className="btn-grad"
                  >
                    Purchased
                  </button>:
                    <>
                    <button
                    type="button"
                    className="btn-grad"
                    onClick={() => addToCart(course._id)}
                  >
                    <span>
                      <ShoppingCartIcon />
                    </span>
                    Add to cart
                  </button>
                  <Login
                  open={open}
                  handleClose={handleClose}
                  PaperComponent={PaperComponent}
                  />
                </>
                  }
                  
                  {/* <p className="add-to-cart-msg">
                    {itemMessage && itemMessage}
                  </p> */}
                </div>

                <div className="share-now">
                  <RWebShare
                    data={{
                      text: "Web Share - GfG",
                      url: `http://localhost:3000/courses/${course._id}`,
                      title: "GfG",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <span className="share-text">share now</span>
                  </RWebShare>
                  <span className="share-icon">
                    <ShareIcon />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div class="thought">
        <h2>Leave a Review</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="row review-form">
          <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email *"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
            <textarea
              className="form-control"
              placeholder="Your Comment"
              rows="4"
            ></textarea>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 comment-btn-box">
            <button type="submit" className="btn-grad">
              Submit
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
};
export default CourseBody;

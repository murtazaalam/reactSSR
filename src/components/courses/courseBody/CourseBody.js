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
import singleCourseApi from "../../../apis/api/SingleCourse";
import addToCartApi from "../../../apis/api/AddToCart";

import "./courseBody.css";

const CourseBody = () => {
  const [value, setValue] = useState("1");
  const [course, setCourses] = useState();
  const [timeBadge, setTimerBadge] = useState(true);
  const [itemMessage, setItemMessage] = useState("");
  //for timer
  const daysHoursMinSecs = { day: 2, hours: 0, minutes: 0, seconds: 30 };
  const { day = 0, hours = 0, minutes = 0, seconds = 60 } = daysHoursMinSecs;
  const [[days, hrs, mins, secs], setTime] = useState([
    day,
    hours,
    minutes,
    seconds,
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!course) {
      //id of course will be sent
      singleCourseApi("6202084444f3cd1aa545bb7b", setCourses);
      if(course) localStorage.setItem("course",course.course_name);
    }
  }, [course]);

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
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });
  const addToCart = (id) => {
    let body = {
      course_id:id,
      course_name:course.course_name,
      price:course.price,
      email:"murtuz@gmail.com"
    }
    addToCartApi(body, setItemMessage);
  }
  return (
    <>
      <div className="course-tab-container">
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
                  <Tab label="Review" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row tab-desc">
                  <Typography component="h2">Course Description</Typography>
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {course && (
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
              <TabPanel value="3">
                <div className="row" style={{justifyContent: 'left'}}>
                <div class="thought">
                    <h2>Leave a Review</h2>
                    <p>
                      Your email address will not be published. Required fields are marked *
                    </p>
                    <form className="row review-form">
                      <div className="col-lg-12 col-md-12 col-sm-12 thought-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name *"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 thought-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email *"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 thought-input-field">
                        <textarea
                          className="form-control"
                          placeholder="Your Comment"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 check">
                        <input type="checkbox" className="form-check-input" />
                        <span>
                          Save my name, email, and website in this browser for the next time
                          I comment.
                        </span>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 comment-btn-box">
                        <button type="submit" className="comment-submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </Typography>
        <div className="video-section">
          <div class="video-box">
            {course && (
              <div class="video">
                {course.thumbnail && (
                  <img src={course.thumbnail} className="img-fluid" alt="" />
                )}
                {course.video && (
                  <iframe
                    src={course.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            )}
            <div class="course-detail">
              {course && (
                <div class="course-price">
                  {course.discounted_price > 0 && (
                    <p>
                      Rs.&nbsp;
                      {timeBadge === true ? (
                        <del>
                          <span>{course && course.price}</span>
                          <span>.99</span>
                        </del>
                      ) : (
                        <span>
                          <span>{course.price}</span>
                          <span>.99</span>
                        </span>
                      )}
                      &nbsp;
                      {timeBadge === true ? (
                        <span className="updated-price">
                          <Badge
                            badgeContent={`${days
                              .toString()
                              .padStart(1, "0")}d ${hrs
                              .toString()
                              .padStart(2, "0")}:${mins
                              .toString()
                              .padStart(2, "0")}:${secs
                              .toString()
                              .padStart(2, "0")}`}
                            color="primary"
                          >
                            {course.discounted_price}
                          </Badge>
                        </span>
                      ) : (
                        ""
                      )}
                    </p>
                  )}
                  {course.discounted_price === "0" && (
                    <p>
                      Rs.&nbsp;
                      <span>{course.price}</span>
                      <span>.99</span>
                    </p>
                  )}
                </div>
              )}
              <div class="other">
                <p>
                  <span class="icon">
                    <AccessAlarmIcon />
                  </span>
                  <span class="heading">Duration</span>
                </p>
                <p class="sub-heading">{course && course.duration} hours</p>
              </div>
              <div class="other">
                <p>
                  <span class="icon">
                    <LocalLibraryIcon />
                  </span>
                  <span class="heading">Lession</span>
                </p>
                <p class="sub-heading">
                  {course && course.lession} Lectures
                </p>
              </div>
              <div class="other">
                <p>
                  <span class="icon">
                    <BookmarkIcon />
                  </span>
                  <span class="heading">Enrolled</span>
                </p>
                <p class="sub-heading">
                  {course && course.enrolled} Students
                </p>
              </div>
              <div class="other">
                <p>
                  <span class="icon">
                    <ChromeReaderModeIcon />
                  </span>
                  <span class="heading">Access</span>
                </p>
                <p class="sub-heading">{course && course.access}</p>
              </div>
              <div>
                <button type="button" onClick={() => addToCart("6202084444f3cd1aa545bb7b")}>
                  <span>
                    <ShoppingCartIcon />
                  </span>
                  Add to cart
                </button>
                <p className="add-to-cart-msg">{itemMessage && itemMessage}</p>
              </div>
              <div class="share-now">
                <span className="share-text">share now</span>
                <span className="share-icon">
                  <ShareIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseBody;

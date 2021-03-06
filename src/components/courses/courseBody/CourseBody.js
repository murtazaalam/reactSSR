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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./courseBody.css";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { RWebShare } from "react-web-share";
import ButtonLoader from "../../../assets/images/button_loader.gif";
import addReviewApi from "../../../apis/api/AddReview";
import { cartAction } from "../../../redux/slices/cart.slice";
import { logoutAction } from "../../../redux/slices/auth.slices";
import getFromCartApi from "../../../apis/api/GetFromCart";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Fade from '@mui/material/Fade';



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
const CourseBody = ({ course, isBaughtCourse }) => {
  const [value, setValue] = useState("1");

  const [loader, setLoader] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [formError, setFormError] = useState(false);
  const [cartLoader, setCartLoader] = useState(false);
  const [error, setError] = useState();
  const [y, setY] = useState([]);
  const [cartData, setCartData] = useState();
  const [loading, setLoading] = useState();
  let navigate = useNavigate();
  let { discountTime } = useSelector((state) => state.CourseReducer);
  const [timeBadge, setTimerBadge] = useState(false);
  let dispatch = useDispatch();
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [placement, setPlacement] = React.useState();
  
  const handleClicked = (newPlacement)=>(event) => {
    setAnchorEl(anchorEl ? null :event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  }; 

  const handleClosePop = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);
  const id = opened ? '' : undefined;
 
  const currentUrl = window.location.href;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
console.log(Math.floor(discountTime/24));
  const [[days, hrs, mins, secs], setTime] = useState([
    Math.floor(discountTime/24),
    discountTime,
    0,
    0
  ]);

  useEffect(() => {
    if(discountTime > 0) setTimerBadge(true);
    setTime([Math.floor(discountTime/24), discountTime, 0, 0])
  },[discountTime])

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const tick = () => {
    if (days === 0 && hrs === 0 && mins === 0 && secs === 0) {
      setTimerBadge(false);
    } else if (hrs === 0 && mins === 0 && secs === 0) {
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
    console.log(timerId);
    return () => clearInterval(timerId);
  });

  const addToCart = async (id) => {
    setCartLoader(true);
    let body = {
      course_type: "course",
      course_name: course.course_name,
      registration_fee: course.registration_fee,
      course_image: course.thumbnail,
      description: course.description,
      avg_rating: course.avgRating,
      gradient: course.gradient,
      discount: course.discount,
      reviews: course.noOfReviews,
      price: course.price,
      course_id: id,
    };
    let message = await addToCartApi(body, setCartLoader);
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
    } else if (message === "Item Added") {
      toast.success("Course added to your cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let data = await getFromCartApi(setCartData, setY, setLoading, setError);
      dispatch(cartAction({ cartCount: data?.length }));
    } else if (message === "Unauthorized") {
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
      navigate("/auth-user");
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
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setFormError(false);
    setLoader(true);
    if (!data.get("email").match(emailValidate)) {
      setFormError(true);
      setLoader(false);
      return;
    } else {
      let body = {
        name: data.get("name"),
        email: data.get("email"),
        comment: data.get("comment") ? data.get("comment") : null,
      };
      try {
        let res = await addReviewApi(body, setError, setLoader);
        if (res === "Thanks For Your Review") {
          toast.success(res, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          emptyState();
        } else {
          toast.error(res, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setOpen(true);
        }
      } catch (error) {
        console.log("error=", error);
      }
    }
  };
  const inputValue = (value) => {
    setEmail(value);
    let emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailValidate)) {
      setFormError(true);
      return;
    }
    setFormError(false);
  };

  const emptyState = () => {
    setComment("");
  };

  return (
    <>
      <div className="course-tab-container">
        <Typography component="div">
          <Box
            sx={{ width: "100%", typography: "body1" }}
            className="course-body"
          >
            <TabContext value={value}>
              <Box className="techvanto-service">
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs"
                  className="services-tabs"
                  variant="scrollable"
                >
                  <Tab label="Overview" value="1" />
                  <Tab label="Curriculum" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="row tab-desc">
                  <Typography sx={{ pt: "24px" }} component="h2">
                    Course Description
                  </Typography>
                  <Typography component="p" className="tab-course-description">
                    {course && course.description}
                  </Typography>
                  <Typography sx={{ pt: "24px" }} component="h2">
                    Learning Objectives
                  </Typography>

                  {/* MAP Learning Objectives */}
                  <ol className="desc-list-box">
                    {course &&
                      course.preRequisites?.map((data, index) => (
                        <li className="tab-course-description" key={index}>
                          {data}
                        </li>
                      ))}
                  </ol>

                  {/* Prerequisites */}
                  <Typography sx={{ pt: "24px" }} component="h2">
                    Prerequisites{" "}
                  </Typography>

                  {/* MAP Prerequisites  */}
                  <ol className="desc-list-box">
                    {course &&
                      course.learningObjective?.map((data, index) => (
                        <li className="tab-course-description" key={index}>
                          {data}
                        </li>
                      ))}
                  </ol>

                  {/* Training Benefits */}
                  <Typography sx={{ pt: "24px" }} component="h2">
                    Training Benefits
                  </Typography>

                  {/* MAP Training Benefits */}
                  <ol className="desc-list-box">
                    {course &&
                      course.training_benefits?.map((data, index) => (
                        <li className="tab-course-description" key={index}>
                          {data}
                        </li>
                      ))}
                  </ol>
                </div>
              </TabPanel>
              <TabPanel value="2">
                {isEmpty(course) === false && (
                  <div className="curriculum">
                    {course.curriculum.map((curriculum, index) => {
                      return (
                        <Accordion key={index}>
                          {isLogin ?
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="curriculum-heading">
                            {curriculum.heading}
                          </Typography>
                        </AccordionSummary> :
                        <List>
                            <ListItem>
                              <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                            <Typography className="curriculum-heading">
                            {curriculum.heading}                                                    
                            </Typography>
                            <IconButton edge='end'>
                                <LockOutlinedIcon
                                aria-describedby={id} 
                                type="button" 
                                onClick={handleClicked('top')} />
                                <Popper id={id} open={opened} anchorEl={anchorEl} placement={placement} transition>
                                {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={100}>
                                  <Paper>
                                    <Typography sx={{ p: 2 }}>
                                      Login First.
                                    </Typography>
                                  </Paper>
                                </Fade>
                                )}
                                </Popper>
                              </IconButton>
                              </div>
                          </ListItem>                                    
                      </List>
                          }
                          {isLogin ? 
                          <AccordionDetails>
                          <ul>
                            {curriculum.detail?.map((data, i) => (
                              <li key={i}>{data}</li>
                            ))}
                          </ul>
                        </AccordionDetails> :
                        <AccordionSummary disabled/>
                          }                      
                        </Accordion>
                      );
                    })}
                  </div>
                )}
              </TabPanel>
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
                  {course.posterImageUrl && (
                    <img
                      src={course.posterImageUrl}
                      className="img-fluid"
                      alt=""
                    />
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
                  {!course.posterImageUrl && (
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
                    {course.discount > 0 ? (
                      <p>
                        Rs.&nbsp;
                        {discountTime > 0 && timeBadge ? (
                          <>
                            <del>
                              <span>{course.price}</span>
                            </del>
                            <span className="updated-price">
                              <Badge
                                badgeContent={ days > 0 ? 
                                  `${  days } days left`  : 
                                 `${hrs}:${mins}:${secs}`
                              }

                                color="primary"
                              >
                                &nbsp;{course.price - course.discount}
                              </Badge>
                            </span>
                          </>
                        ) : (
                          <span>
                            <span>{course.price - course.discount}</span>
                          </span>
                        )}
                      </p>
                    ) : (
                      <p>
                        Rs.&nbsp;
                        <span>{course.price}</span>
                      </p>
                    )}
                    {/* {course.discount === "0" && (
                      <p>
                        Rs.&nbsp;
                        <span>{course.price}</span>
                        <span>.99</span>
                      </p>
                    )} */}
                  </div>
                )}
                <div className="other">
                  <p>
                    <span className="icon">
                      <AccessAlarmIcon />
                    </span>
                    <span className="heading">Duration</span>
                  </p>
                  <p className="sub-heading">{course && course.duration}</p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <LocalLibraryIcon />
                    </span>
                    <span className="heading">Lesson</span>
                  </p>
                  <p className="sub-heading">
                    {course && course.noOfLectures} Lectures
                  </p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <BookmarkIcon />
                    </span>
                    <span className="heading">Enrolled</span>
                  </p>
                  <p className="sub-heading">
                    {course && course.noOfEnrollment} Students
                  </p>
                </div>
                <div className="other">
                  <p>
                    <span className="icon">
                      <ChromeReaderModeIcon />
                    </span>
                    <span className="heading">Access</span>
                  </p>
                  <p className="sub-heading">{course && course.accessMode}</p>
                </div>
                <div>
                  {isBaughtCourse ? (
                    <button type="button" className="btn-grad btn-purchased">
                      Purchased
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="btn-grad btn-cart"
                        onClick={() => addToCart(course._id)}
                        disabled={cartLoader ? true : false}
                        style={
                          cartLoader
                            ? { backgroundColor: "var(--color-disable)" }
                            : { backgroundColor: "var(--color-secondary)" }
                        }
                      >
                        {cartLoader ? (
                          <img src={ButtonLoader} width="80" alt="" />
                        ) : (
                          <>
                            <span>
                              <ShoppingCartIcon />
                            </span>
                            Add to cart
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
                <div className="share-now">
                  <RWebShare
                    data={{
                      text: `Course - ${course.course_name}`,
                      url: currentUrl,
                      title: `${course.course_name}`,
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
      <div class="thought">
        <h2>Leave a Review</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="row review-form" onSubmit={handleSubmit}>
          <div className="col-lg-6 col-md-12 col-sm-12 thought-input-field">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
              name="name"
              value={isLogin ? admin.name : name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12 thought-input-field"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Your Email *"
              name="email"
              value={isLogin ? admin.email : email}
              onChange={(e) => inputValue(e.target.value)}
              style={
                formError
                  ? { borderColor: "var(--color-secondary)" }
                  : { borderColor: "#f8f8f8" }
              }
              required
            />
            <p
              className="email-error"
              style={formError ? { display: "block" } : { display: "none" }}
            >
              Invalid Email
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 thought-input-field">
            <textarea
              className="form-control"
              placeholder="Your Comment"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 comment-btn-box">
            <button
              type="submit"
              className="btn-grad btn-review"
              disabled={loader ? true : false}
              style={
                loader
                  ? { backgroundColor: "var(--color-disable)" }
                  : { backgroundColor: "var(--color-secondary)" }
              }
            >
              {loader ? <img src={ButtonLoader} width="80" alt="" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CourseBody;

/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AppBar from "@mui/material/AppBar";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Draggable from "react-draggable";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PrimaryNavBar from "../primaryNavBar/PrimaryNavBar";
// import logo from "../../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import { withRouter } from "react-router-dom";
import logoOnScroll from "../../../assets/images/on-scroll-logo.png";
import SchoolIcon from "../../../assets/images/new-course-icon-school.svg";
import IntermediateIcon from "../../../assets/images/new-course-icon-intermediate.svg";
import CollegeIconIcon from "../../../assets/images/new-course-icon-college.svg";
import Services from "../../../data/services/Services";
import AllCourseApi from "../../../apis/api/AllCourse";
import getFromCartApi from "../../../apis/api/GetFromCart";
import "./navBar.css";
import Login from "../../Login/Login";
import { cartItemList, userAuth } from "../../../recoil/store";

import Paper from "@mui/material/Paper";
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

const NavBar = (props) => {
  const [scroll, setScroll] = useState(false);
  const [allCourse, setAllCourse] = useState();
  const [loading, setLoading] = useState();
  const [cartData, setCartData] = useState();
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useRecoilState(cartItemList);
  const [isLogged, setIsLogged] = useRecoilState(userAuth);
  const isUserLogIn = useRecoilValue(userAuth);
  console.log(props);
  let schoolCourses = [];
  let intermediateCourses = [];
  let collegeCourses = [];

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    window.location.reload(false);
  };
  const [user, setUser] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("true");
      setUser(true);
    } else {
      // console.log("false");
      setUser(false);
    }
  }, [user]);
  useEffect(() => {
    const getCartData = async () => {
      if (!cartData) {
        let data = await getFromCartApi(setCartData);
        setCartCount(data?.length);
      }
    };
    getCartData();
    setCartItem(cartData);
  }, []);
  useEffect(() => {
    const getAllCourses = async () => {
      if (!allCourse) {
        AllCourseApi(setAllCourse, setLoading);
      }
    };
    getAllCourses();
  }, [allCourse]);

  if (allCourse) {
    allCourse?.forEach((item) => {
      if (item.category === "For School") {
        schoolCourses.push(item);
      }
      if (item.category === "For Intermediate") {
        intermediateCourses.push(item);
      }
      if (item.category === "For College") {
        collegeCourses.push(item);
      }
    });
  }
  //JSON.parse(localStorage.getItem) to retrieve
  localStorage.setItem("forSchool", JSON.stringify(schoolCourses));
  localStorage.setItem("forIntermediate", JSON.stringify(intermediateCourses));
  localStorage.setItem("forCollege", JSON.stringify(collegeCourses));
  React.useEffect(() => {
    console.log(">>>>", isUserLogIn);
    if (isUserLogIn) setOpen(false);
    console.log(">>>>", isUserLogIn, ">>open", open);
  }, []);

  const list = (anchor) => {
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "100vw" }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem button>
        <Accordion
          className="techvanto-navbar-service-accordian"
          style={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {Services.map((data, index) => (
                <ListItem
                  component={Link}
                  to={data.link}
                  button
                  key={data.text}
                >
                  <ListItemText primary={data.text} />
                </ListItem>
              ))}
              <ListItem>
                <ListItemText primary="list is working" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </Box>;
  };

  return (
    <>
      <AppBar className={scroll ? "navbar-background" : "bg-royal-transparent"}>
        <div className={scroll ? "hide-primary-navbar" : ""}>
          <PrimaryNavBar />
        </div>
        <Container
          maxWidth="lg"
          className="secondary-navbar"
          style={{ whiteSpace: "nowrap" }}
        >
          <Toolbar className="main-logo">
            <Link to="/">
              <img src={logoOnScroll} height="100%" width="234px" alt="" />
            </Link>
          </Toolbar>
          <Toolbar>
            <Button
              onClick={toggleDrawer("left", true)}
              className="techvanto-navbar-menu-icon menu-icon"
            >
              <MenuIcon
                sx={scroll === false ? { color: "white" } : { color: "black" }}
              />
            </Button>
            <SwipeableDrawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
            <Container className="navbar-category">
              <div className="menu-item">
                <div className="item courses">
                  <Link to="/all-courses/all" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Courses
                    </span>
                  </Link>
                  <div className="dropdown-content">
                    <ul className="dropdown-menu-multi-level">
                      <li>
                        <a>
                          <Link to="/all-courses/school"> Schools</Link>
                          <div className="course-list school-course">
                            <div className="image-section">
                              <img src={`${SchoolIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {schoolCourses &&
                                  schoolCourses.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a href={`/courses/${item._id}`}>
                                          {item.course_name}
                                        </a>
                                        <div className="course-desc desc">
                                          <div className="desc-heading">
                                            Description
                                          </div>
                                          <div
                                            style={{
                                              width: "225px",
                                              textAlign: "justify",
                                              whiteSpace: "pre-wrap",
                                            }}
                                          >
                                            {item.description}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/all-courses/college"> Colleges</Link>
                          <div className="course-list">
                            <div
                              className="image-section"
                              style={{
                                background:
                                  "linear-gradient(120deg, #fc8955 0%, #fc8955 50%, #fcb82f 100%",
                              }}
                            >
                              <img src={`${CollegeIconIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {collegeCourses &&
                                  collegeCourses.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a href={`/courses/${item._id}`}>
                                          {item.course_name}
                                        </a>
                                        <div className="course-desc desc">
                                          <div className="desc-heading">
                                            Description
                                          </div>
                                          <div
                                            style={{
                                              width: "225px",
                                              textAlign: "justify",
                                              whiteSpace: "pre-wrap",
                                            }}
                                          >
                                            {item.description}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          <Link to="/all-courses/intermediate">
                            Intermediate{" "}
                          </Link>
                          <div className="course-list">
                            <div
                              className="image-section"
                              style={{
                                background:
                                  "linear-gradient(120deg, #307bf2 0%, #307bf2 50%, #c38efd 100%",
                              }}
                            >
                              <img src={`${IntermediateIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {intermediateCourses &&
                                  intermediateCourses.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a
                                          // onClick={refreshPage}
                                          href={`/courses/${item._id}`}
                                        >
                                          {item.course_name}
                                        </a>
                                        <div className="course-desc desc">
                                          <div className="desc-heading">
                                            Description
                                          </div>
                                          <div
                                            style={{
                                              width: "225px",
                                              textAlign: "justify",
                                              whiteSpace: "pre-wrap",
                                            }}
                                          >
                                            {item.description}
                                          </div>
                                        </div>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <a href="#services" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Services
                    </span>
                  </a>
                </div>
                <div className="item">
                  <Link to="/events" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Events
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/interview-questions" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Interview Questions
                    </span>
                  </Link>
                </div>
                <div className="item">
                  <Link to="/blogs" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Blogs
                    </span>
                  </Link>
                </div>

                <div className="item">
                  <div class="dropdown">
                    <a className="menu-text">
                      <span
                        className={
                          scroll === false ? "color-white" : "color-black"
                        }
                      >
                        Contact Us
                      </span>
                    </a>
                    <div class="dropdown-content-contact">
                      <Link to="/contact-us-for-hiring">For Hiring</Link>
                      <Link to="/contact-us-to-get-hired">To Get Hired</Link>
                      <Link to="/coming-soon">know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div className="item">
              {user ? (
                <>
                  <Link to="/my-cart" style={{ marginRight: "30px" }}>
                    <IconButton aria-label="cart" className="color-white">
                      <Badge badgeContent={cartCount} color="error">
                        <ShoppingCartIcon fontSize="large" />
                      </Badge>
                    </IconButton>
                  </Link>

                  <div class="dropdown">
                    <Link to="/">
                      <span
                        className="color-white"
                        // className={
                        //   scroll === false ? "color-white" : "color-black"
                        // }
                      >
                        <AccountCircleIcon fontSize="large" />
                      </span>
                    </Link>
                    <div class="dropdown-content-contact">
                      <Link to="/my-courses">My Courses</Link>
                      <a style={{ color: "black" }} onClick={logoutHandler}>
                        Log Out
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button className="btn-grad" onClick={handleClickOpen}>
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Login / SignUp
                    </span>
                  </button>

                  <Login
                    open={open}
                    handleClose={handleClose}
                    PaperComponent={PaperComponent}
                  />
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;

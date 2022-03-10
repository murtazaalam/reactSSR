import * as React from "react";
import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import AppBar from "@mui/material/AppBar";
import { Container, Button, Avatar, Tooltip } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, NavLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Draggable from "react-draggable";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PrimaryNavBar from "../primaryNavBar/PrimaryNavBar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
// import { HashLink } from "react-router-hash-link";
// import logo from "../../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import logoOnScroll from "../../../assets/images/on-scroll-logo.png";
import SchoolIcon from "../../../assets/images/new-course-icon-school.svg";
import IntermediateIcon from "../../../assets/images/new-course-icon-intermediate.svg";
import CollegeIconIcon from "../../../assets/images/new-course-icon-college.svg";
import AllCourseApi from "../../../apis/api/AllCourse";
import getFromCartApi from "../../../apis/api/GetFromCart";
import "./navBar.css";
import Login from "../../Login/Login";
import { cartItemList, userAuth } from "../../../recoil/store";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getCourse } from "../../../redux/slices/course.slice";

import Paper from "@mui/material/Paper";
import { logoutAction } from "../../../redux/slices/auth.slices";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
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
  const [allCourse, setAllCourse] = useState({});
  const [coursesByCategory, setCoursesByCategory] = useState({});
  const [loading, setLoading] = useState();
  const [cartData, setCartData] = useState();
  const [cartItem, setCartItem] = useRecoilState(cartItemList);
  const [isLogged, setIsLogged] = useRecoilState(userAuth);
  const [error, setError] = useState();
  const [courseData, setCourseData] = React.useState();
  const [cartCounting, setCartCount] = useState();
  const [y, setY] = useState([]);
  let dispatch = useDispatch();
  const [collapse_open, setcollapse_open] = React.useState(true);

  const collapseHandler = () => {
    console.log(collapse_open);
    setcollapse_open(!collapse_open);
  };

  const [drawable, setDrawable] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  let { cartCount } = useSelector((state) => state.CartReducer);
  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogged(false);
  };
  const [user, setUser] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen(false);
    setOpen(false);
  };
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawable({ ...drawable, [anchor]: open });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(true);
    } else {
      // console.log("false");
      setUser(false);
    }
  }, [user]);
  useEffect(() => {
    const getCartData = async () => {
      if (!cartData) {
        let data = await getFromCartApi(setCartData, setY, setLoading, setError);
        setCartCount(data?.length);
      }
    };
    getCartData();
    setCartItem(cartData);
  }, []);
  useEffect(() => {
    AllCourseApi(setAllCourse, setCoursesByCategory, setLoading);
  }, []);
  if (loading === true) {
    toast.error("Weak Network", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoading(false);
  }
  const changeCourse = (id) => {
    dispatch(getCourse({ id, setCourseData }));
  };

  const list = (anchor) => (
    <Box
      component="nav"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        p: 2,
      }}
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {admin && (
          <>
            <ListItem>
              <Avatar alt={admin?.name.toUpperCase()} src="authorImage/png" />
            </ListItem>
            <ListItem sx={{ pb: 0, pt: 0 }}>
              <ListItemText
                primary={admin.name[0].toUpperCase() + admin.name.substring(1)}
              />
            </ListItem>

            <ListItem sx={{ pt: 0 }}>
              <ListItemText primary={admin?.email} />
            </ListItem>
            <Divider />
          </>
        )}
        <ListItem onClick={toggleDrawer(anchor, false)}>
          <HashLink to="/#services" className="sidebar-link">
            Services
          </HashLink>
        </ListItem>

        <ListItem onClick={toggleDrawer(anchor, false)}>
          <Link className="sidebar-link" to="/all-courses/all">
            Courses
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}>
          <Link className="sidebar-link" to="/events">
            Events
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}>
          <Link className="sidebar-link" to="/interview-questions">
            Interview Questions
          </Link>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}>
          <Link className="sidebar-link" to="/blogs">
            Blogs
          </Link>
        </ListItem>

        <ListItem onClick={collapseHandler}>
          <ListItemText primary="Contact Us" className="sidebar-link" />
          {collapse_open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapse_open} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
              <Link className="sidebar-link" to="/contact-us-for-hiring">
                Hire With Us
              </Link>
            </ListItem>
            <ListItem sx={{ pl: 4 }} onClick={toggleDrawer(anchor, false)}>
              <Link className="sidebar-link" to="/contact-us-to-get-hired">
                Get Hired
              </Link>
            </ListItem>
          </List>
        </Collapse>
        {/* <Link to="/contact-us-for-hiring" className="sidebar-link">
            Hiring With Us
          </Link>
    
    
          <Link to="/contact-us-to-get-hired" className="sidebar-link">
            Get Hired
          </Link> */}

        {isLogin ? (
          <>
            <ListItem>
              <Link className="sidebar-link" to="/my-courses">
                My Courses
              </Link>
            </ListItem>
            <ListItem>
              <Link className="sidebar-link" to="/my-cart">
                My Cart
              </Link>
            </ListItem>
            <ListItem>
              <Link className="sidebar-link" to="/" onClick={logoutHandler}>
                Logout
              </Link>
            </ListItem>
          </>
        ) : (
          <ListItem>
            <button className="btn-grad btn-nav" onClick={handleClickOpen}>
              <span
                className={scroll === false ? "color-white" : "color-black"}
              >
                LogIn / SignUp
              </span>
            </button>
          </ListItem>
        )}
      </List>
    </Box>
  );

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
          <Toolbar
            className="main-logo"
            style={{ paddingTop: "3px", width: "250px" }}
          >
            <Link to="/">
              <img src={logoOnScroll} height="100%" width="250px" alt="Logo" />
            </Link>
          </Toolbar>
          <Toolbar>
            <Button
              onClick={toggleDrawer("left", true)}
              className="techvanto-navbar-menu-icon menu-icon"
            >
              <MenuIcon sx={{ color: "white" }} />
            </Button>
            <SwipeableDrawer
              anchor={"left"}
              open={drawable["left"]}
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
                          <NavLink to="/all-courses/school">Schools</NavLink>
                          <div className="course-list school-course">
                            <div className="image-section">
                              <img src={`${SchoolIcon}`} alt="" />
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.School?.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a
                                          href={`/#/courses/${item._id}`}
                                          onClick={() => changeCourse(item._id)}
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
                      <li>
                        <a>
                          <Link to="/all-courses/college">Colleges</Link>
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
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.College?.map((item) => {
                                    return (
                                      <li key={item._id}>
                                        <a
                                          href={`/#/courses/${item._id}`}
                                          onClick={() => changeCourse(item._id)}
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
                                {isEmpty(coursesByCategory) === false &&
                                  coursesByCategory.Intermediate?.map(
                                    (item) => {
                                      return (
                                        <li key={item._id}>
                                          <a
                                            // onClick={refreshPage}
                                            href={`/#/courses/${item._id}`}
                                            onClick={() =>
                                              changeCourse(item._id)
                                            }
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
                                    }
                                  )}
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <NavHashLink to="/#services" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Services
                    </span>
                  </NavHashLink>
                  {/* <a href="/#services" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Services
                    </span>
                  </a> */}
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
                  <Link to="/about-us" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      About Us
                    </span>
                  </Link>
                </div>

                <div className="item">
                  <div className="dropdown">
                    <a className="menu-text">
                      <span
                        className={
                          scroll === false ? "color-white" : "color-black"
                        }
                      >
                        Contact Us
                      </span>
                    </a>
                    <div className="dropdown-content-contact">
                      <Link to="/contact-us-for-hiring">Hire With Us</Link>
                      <Link to="/contact-us-to-get-hired">Get Hired</Link>
                      <Link to="/coming-soon">Know More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div className="item user-aria" style={{ position: "relative" }}>
              {isLogin ? (
                <>
                  <Link to="/my-cart" style={{ marginRight: "30px" }}>
                    <IconButton aria-label="cart" className="color-white">
                      <Badge badgeContent={cartCount ? cartCount : cartCounting} 
                        color="error"
                      >
                        <ShoppingCartIcon fontSize="large" />
                      </Badge>
                    </IconButton>
                  </Link>
                  <div className="dropdown">
                    <span className="user-name">Hey!&nbsp;
                    {admin.name.split(" ")[0].length < 7 ? admin.name.split(" ")[0] : admin.name.split(" ")[0].substr(0, 6) + '..'}
                    </span>
                    <Link to="/">
                      <span className="color-white">
                        <Tooltip title={admin.name}>
                          <AccountCircleIcon fontSize="large" />
                        </Tooltip>
                      </span>
                    </Link>
                    <div className="dropdown-content-contact" style={{top: '34px'}}>
                      <a style={{ color: "black", textTransform: 'capitalize' }}>
                        {admin.name.split(" ")[0]}
                      </a>
                      <Link to="/my-courses">My Courses</Link>
                      <a style={{ color: "black" }} onClick={logoutHandler}>
                        Log Out
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="btn-grad btn-nav"
                    onClick={handleClickOpen}
                  >
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      LogIn / SignUp
                    </span>
                  </button>

                  <Login
                    open={isLogin ? false : open}
                    handleClose={handleClose}
                    PaperComponent={PaperComponent}
                  />
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
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
    </>
  );
};
export default NavBar;

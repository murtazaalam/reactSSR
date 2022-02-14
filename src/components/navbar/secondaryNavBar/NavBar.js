/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { useState, useEffect } from "react";
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
import PrimaryNavBar from "../primaryNavBar/PrimaryNavBar";

import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

import logo from "../../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import logoOnScroll from "../../../assets/images/on-scroll-logo.png";
import SchoolIcon from "../../../assets/images/new-course-icon-school.svg";
import IntermediateIcon from "../../../assets/images/new-course-icon-intermediate.svg";
import CollegeIconIcon from "../../../assets/images/new-course-icon-college.svg";
import Services from "../../../data/services/Services";
import "./navBar.css";
import Login from "../../Login/Login";

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

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
        <Container maxWidth="lg" className="secondary-navbar">
          <Toolbar className="main-logo">
            <Link to="/">
              <img
                src={scroll ? `${logo}` : `${logoOnScroll}`}
                height="100%"
                width="234px"
                alt=""
              />
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
                  <Link to="/all-courses" className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Courses
                    </span>
                    <ExpandMoreIcon
                      sx={
                        scroll === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="arrow-icon"
                    />
                  </Link>
                  <div className="dropdown-content">
                    <ul className="dropdown-menu-multi-level">
                      <li>
                        <a>
                          For Schools
                          <div className="course-list school-course">
                            <div className="image-section">
                              <Link to="/courses" className="course-image">
                                <img src={`${SchoolIcon}`} alt="" />
                              </Link>
                            </div>
                            <div className="school-course-list">
                              <span>Courses</span>
                              <ul>
                                <li>
                                  Course 1
                                  <div className="course-desc desc default-desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Course 1 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Course 2
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Course 2 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Course 3
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Course 3 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Course 4
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Course 4 Description</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          For Colleges
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
                                <li>
                                  Colleges 1
                                  <div className="course-desc desc default-desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Colleges 1 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Colleges 2
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Colleges 2 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Colleges 3
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Colleges 3 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Colleges 4
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Colleges 4 Description</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a>
                          For Intermediate
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
                                <li>
                                  Intermediate 1
                                  <div className="course-desc desc default-desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Intermediate 1 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Intermediate 2
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Intermediate 2 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Intermediate 3
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Intermediate 3 Description</div>
                                  </div>
                                </li>
                                <li>
                                  Intermediate 4
                                  <div className="course-desc desc">
                                    <div className="desc-heading">
                                      Description
                                    </div>
                                    <div>Intermediate 4 Description</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <a className="menu-text">
                    <span
                      className={
                        scroll === false ? "color-white" : "color-black"
                      }
                    >
                      Services
                    </span>
                    {/* <ExpandMoreIcon
                      sx={
                        scroll === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="arrow-icon"
                    /> */}
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
                    {/* <ExpandMoreIcon
                      sx={
                        scroll === false
                          ? { color: "white" }
                          : { color: "black" }
                      }
                      className="arrow-icon"
                    /> */}
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
                    <Link to="/contact-us" className="menu-text">
                      <span
                        className={
                          scroll === false ? "color-white" : "color-black"
                        }
                      >
                        Contact Us
                      </span>
                      <ExpandMoreIcon
                        sx={
                          scroll === false
                            ? { color: "white" }
                            : { color: "black" }
                        }
                        className="arrow-icon"
                      />
                    </Link>
                    <div class="dropdown-content-contact">
                      <Link to="/contact-us-for-hiring">
                        Contact Us for Hiring
                      </Link>
                      <Link to="/contact-us-getHired">Get Hired</Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <div className="item">
              <button className="menu-text btn-grad" onClick={handleClickOpen}>
                <span
                  className={scroll === false ? "color-white" : "color-black"}
                >
                  Login/SignUp
                </span>
              </button>
              <Login
                open={open}
                handleClose={handleClose}
                PaperComponent={PaperComponent}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;

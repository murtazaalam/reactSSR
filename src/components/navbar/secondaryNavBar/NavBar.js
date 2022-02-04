import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Typography, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
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
import PrimaryNavBar from '../primaryNavBar/PrimaryNavBar'
import logo from '../../../assets/images/logo-print-hd-transparent-removebg-preview.png';
import logoOnScroll from '../../../assets/images/on-scroll-logo.png';
import MenuItem from '../../../data/menu-items/MenuList';
import Courses from '../../../data/courses/Courses';
import './navBar.css';


const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const NavBar = () => {

    const [scroll, setScroll] = useState(false);
    const [serviceAnchorEl, setServiceAnchorEl] = useState(null);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 100);
        })
    })

    const handleServiceOpen = (e) => {
        setServiceOpen(true);
        setServiceAnchorEl(e.currentTarget);
    };

    const handleServiceClose = (e) => {
        setServiceOpen(false);
        setServiceAnchorEl(null);
    };
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
                        {/* {Services.map((data, index) => (
                        <ListItem
                            component={Link}
                            to={data.link}
                            button
                            key={data.text}
                        >
                            <ListItemText primary={data.text} />
                        </ListItem>
                        ))} */}
                        <ListItem>
                            <ListItemText primary="list is working" />
                        </ListItem>
                    </List>
                    </AccordionDetails>
                </Accordion>
            </ListItem>
        </Box>
    }

    return (
        <>
            <AppBar className={scroll ? "navbar-background" : "bg-royal-transparent"}>
                <div className={scroll ? "hide-primary-navbar" : ""}>
                    <PrimaryNavBar/>
                </div>
                <Container maxWidth="lg" className="secondary-navbar">
                    <Toolbar className="main-logo">
                        <img
                            src={scroll ? `${logo}` : `${logoOnScroll}`}
                            height="100%"
                            width="234px"
                        />
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
                        <Container className="mobile-menu">
                            {MenuItem.map((item, index) => {
                                return(
                                    <Typography 
                                        variant="a"
                                        onMouseEnter={handleServiceOpen}
                                        onMouseLeave={handleServiceClose}
                                        className="menu-item"
                                        sx={scroll === false ? { color: "white" } : { color: "black" }}
                                        key={index}
                                    >
                                        <a>
                                            {item.menuItem}
                                            <ExpandMoreIcon className="arrow-icon"/>
                                        </a>
                                        <div className="courses">
                                            {item.menuItem === 'Courses' &&
                                                <div>
                                                    {Courses.map((course, index) => {
                                                        return(
                                                            <>
                                                                <h1>{course.category}</h1>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            }
                                            {item.menuItem === 'Services' &&
                                                <div>
                                                    hellosss
                                                </div>
                                            }
                                        </div>
                                    </Typography>
                                )
                            })}
                        </Container>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default NavBar;
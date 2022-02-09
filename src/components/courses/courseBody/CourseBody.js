import * as React from "react";
import { Tab, Typography, Box } from "@mui/material";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import './courseBody.css';

const CourseBody = () => {
    const [value, setValue] = React.useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                                    <Typography component="h2">
                                        Course Description
                                    </Typography>
                                    <Typography component="p" className="tab-course-description">
                                        Sales is the main revenue source for any company. Without that, a company will crumble and it is universally acknowledged truth that Sales is the backbone of any organization. It plays an important role for the company to withstand the market.<br/><br/>
                                        This Career Acceleration Program of 16 to 24-weeks, is handcrafted with the industry’s best minds and experts in the sales field. You will learn concepts, from basic to advanced level. The program will focus on the modern techniques required in this entrepreneurial world backed with placement assurance and industry certification.<br/><br/>
                                        Get ready to be a part of any organization and be a stellar revenue maker. Learn from the best mentors and tutors with an absolute killer curriculum. Get career-ready within no time to ace yourself in placement, internships, traineeship, and beyond that.
                                        We will cover the skills of Sales + Product Management + Introduction to Business Analytics + Professional Enhancement.
                                    </Typography>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className="curriculum">
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className="curriculum-heading">What Is Sales?</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                            sit amet blandit leo lobortis eget.
                                        </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                        >
                                            <Typography className="curriculum-heading">Opening Sales Pitches</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                        >
                                            <Typography className="curriculum-heading">Building Creative Calling Structures</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                                sit amet blandit leo lobortis eget.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </TabPanel>
                            <TabPanel value="3">
                                <div className="row">
                                    Review Tab
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Typography>
                <div className="video-section">
                    <div class="video-box">
                        <div class="video">
                            <iframe src="https://www.youtube.com/embed/oOm66m59jLc" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <div class="course-detail">
                            <div class="course-price">
                                <p>
                                    Rs.&nbsp;
                                    <del>
                                        <span>499</span>
                                        <span>.99</span>
                                    </del>
                                    &nbsp;
                                    <span className="updated-price">
                                    <Badge badgeContent={`3h:30m`} color="primary">
                                        400
                                    </Badge>
                                    </span>
                                </p>
                                
                            </div>
                            <div class="other">
                                <p>
                                    <span class="icon"><AccessAlarmIcon/></span>
                                    <span class="heading">Duration</span>
                                </p>
                                <p class="sub-heading">
                                    32.8 hours
                                </p>    
                            </div>   
                            <div class="other">
                                <p>
                                    <span class="icon"><LocalLibraryIcon/></span>
                                    <span class="heading">Lession</span>
                                </p>
                                <p class="sub-heading">
                                    6 Lectures
                                </p>   
                            </div> 
                            <div class="other">
                                <p>
                                    <span class="icon"><BookmarkIcon/></span>
                                    <span class="heading">Enrolled</span>
                                </p>
                                <p class="sub-heading">
                                    552 Students
                                </p>    
                            </div>     
                            <div class="other">
                                <p>
                                    <span class="icon"><ChromeReaderModeIcon/></span>
                                    <span class="heading">Access</span>
                                </p>
                                <p class="sub-heading">
                                    Lifetime
                                </p>    
                            </div> 
                            <div> 
                                <button type="button">
                                    <span>
                                        <ShoppingCartIcon/>
                                    </span>
                                    Add to cart
                                </button>
                            </div>
                            <div class="share-now">
                                <span className="share-text">share now</span>
                                <span className="share-icon"><ShareIcon/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="thought">
                <h2>Leave a Review</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form className="row review-form">
                    <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
                        <input type="text" className="form-control" placeholder="Your Name *" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
                        <input type="text" className="form-control" placeholder="Your Email *" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 thought-input-field">
                        <textarea className="form-control" placeholder="Your Comment" rows="4"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 check">
                        <input type="checkbox" className="form-check-input"/>
                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                        
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 comment-btn-box">
                        <button type="submit" className="comment-submit">Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default CourseBody;
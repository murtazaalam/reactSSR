/* eslint-disable eqeqeq */
import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EventBackgroundImage from "../../assets/images/event_header_image.svg";
import EventImage from "../../assets/images/event_icon_demo.svg";
import eventsApi from "../../apis/api/GetEvents";
import "./events.css";

const Events = (props) => {
  const [events, setEventData] = useState();
  const [category, setEventCategory] = useState();

  useEffect(() => {
    if (category === "upcoming") {
      if (events == "") {
        eventsApi(category, setEventData);
      }
    } else if (category === "past") {
      if (events == "") {
        eventsApi(category, setEventData);
      }
    } else {
      if (!events) {
        eventsApi(props.category, setEventData);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{ background: `url(${EventBackgroundImage})` }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html" className="home">
                  Home
                  <div className="line"></div>
                </a>
              </li>
              <li className="breadcrumb-item active">Events</li>
            </ol>
          </nav>
          <h1 className="event-heading">Events</h1>
        </div>
      </Box>
      <Box component="section" className="courses-area">
        <Box component="div" className="event-aria">
          <Typography component="h3">Events</Typography>
          <Box className="div" sx={{ display: "flex" }}>
            <Typography component="p" className="view-text">
              Views:{" "}
            </Typography>
            <Typography
              sx={{ marginRight: "6px", cursor: "pointer" }}
              component="span"
              className="active-view"
            >
              <ViewComfyIcon />
            </Typography>
            <Typography component="span" sx={{ cursor: "pointer" }}>
              <TableRowsIcon />
            </Typography>
          </Box>
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
                className={
                  category === "upcoming"
                    ? "active-event-menu"
                    : "inactive-event-menu"
                }
                onClick={() => setEventCategory("upcoming", setEventData([]))}
              >
                Upcoming Events
              </Typography>
              <Typography
                component="h6"
                className={
                  category === "past"
                    ? "active-event-menu"
                    : "inactive-event-menu"
                }
                onClick={() => setEventCategory("past", setEventData([]))}
              >
                Past Events
              </Typography>
            </Box>

            <Box component="h6" className=""></Box>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 col-12">
            {events &&
              events.map((event, index) => {
                return (
                  <Link to="/event/1">
                    <Card
                      sx={{ minWidth: 175, minHeight: 320 }}
                      className="event-card-box"
                      key={index}
                    >
                      <CardContent className="event-card" sx={{ height: 200 }}>
                        <img src={EventImage} width="100" alt="" />
                        {/* for dynamic use below code */}
                        {/* <img src={`${event.image}`} width="100"/> */}
                      </CardContent>
                      <CardActions sx={{ flexDirection: "column" }}>
                        <Typography component="h6" className="event-name">
                          {event.name}
                        </Typography>
                        <Typography component="div" className="event-details">
                          <Typography component="p" className="event-date">
                            {event.date}
                          </Typography>

                          <Typography component="p">
                            {event.category === "upcoming" && (
                              <Link
                                to={`/event/${event._id}`}
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  className="techvanto-know-more-button btn-grad event-btn"
                                  size="small"
                                >
                                  Register Now
                                </Button>
                              </Link>
                            )}
                            {event.category === "past" && (
                              <Link
                                to={`/event/${event._id}`}
                                style={{ textDecoration: "none" }}
                              >
                                <Button
                                  className="techvanto-know-more-button btn-grad event-btn"
                                  size="small"
                                >
                                  See Detail
                                </Button>
                              </Link>
                            )}
                          </Typography>
                        </Typography>
                      </CardActions>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </Box>
      </Box>
    </>
  );
};
export default Events;

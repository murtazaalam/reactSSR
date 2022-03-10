import React from "react";
import "./upcomingEvent.css";
import { makeStyles } from "@mui/styles";

import eventSvg from "../../assets/Svgs/singleEvent.svg";

const DATA = {
  gradient:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,121,9,1) 0%, rgba(0,212,255,1) 100%)",
  event_image: eventSvg,
  event_name: "Student life",
  event_subtitle:
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
};

const useStyles = makeStyles({
  banner: (data) => ({
    background: data.gradient,
  }),
});
function UpcomingEvent() {
  const classes = useStyles(DATA);
  return (
    <div>
      <div className={`${classes.banner} banner`}>
        <div className="eventText">
          <h2>{DATA.event_name}</h2>
          <p>{DATA.event_subtitle}</p>
        </div>
        <div className="eventSvg">
          <img src={eventSvg} alt="" />
        </div>
      </div>
      <div>
        <h2>3 Days Free Seminar</h2>
        <p>Date : 3rd To 5th March 2022 </p>
        <p>Venue : Auditorium, IIT,Bhubaneswar </p>
      </div>

      <button className="btn-grad">Register</button>
    </div>
  );
}

export default UpcomingEvent;

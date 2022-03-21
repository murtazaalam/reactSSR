import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  banner: (data) => ({
    background: data.gradient,
  }),
});
function DetailSection(props) {
  const classes = useStyles(props.data);
  return (
    <div>
      {" "}
      <div className={`${classes.banner} banner`}>
        <div className="eventText">
          <h2 className="trainerHeading">{props.data.event_name}</h2>
          <p className="eventTextSubtitle">{props.data.event_subtitle}</p>
        </div>
        <div className="eventSvg">
          <img src={props.data.event_image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DetailSection;

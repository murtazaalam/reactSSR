import React from "react";
import "./upcomingEvent.css";
import { makeStyles } from "@mui/styles";
import instructor from "../../assets/Svgs/instructor.svg";
import eventSvg from "../../assets/Svgs/singleEvent.svg";
import CheckIcon from "@material-ui/icons/Check";
import BookDemo from "../../components/BookDemo/BookDemo";
const DATA = {
  gradient:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,121,9,1) 0%, rgba(0,212,255,1) 100%)",
  event_image: eventSvg,
  event_name: "Student life",
  event_subtitle:
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  trainer_image: instructor,
  trainer_name: "Shahid Sidaque",
  trainer_profession: "Professor",
  sneak_peak: [
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
  ],
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
          <h2 className="trainerHeading">{DATA.event_name}</h2>
          <p className="eventTextSubtitle">{DATA.event_subtitle}</p>
        </div>
        <div className="eventSvg">
          <img src={eventSvg} alt="" />
        </div>
      </div>
      <div className="section-spacing-event">
        <h2 className="trainerHeading">3 Days Free Seminar</h2>
        <p className="eventTextSubtitle">Date : 3rd To 5th March 2022 </p>
        <p className="eventTextSubtitle">
          Venue : Auditorium, IIT,Bhubaneswar{" "}
        </p>
        <button className="btn-grad full-width">Register</button>
      </div>
      <div className="event-section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit consequatur tenetur ratione doloribus, blanditiis incidunt
          soluta alias aliquid sed. Lorem, ipsum dolor sit amet consectetur
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit consequatur tenetur ratione doloribus, blanditiis incidunt
          soluta alias aliquid sed. Lorem ipsum dolor sit amet consectetur
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit consequatur tenetur ratione doloribus, blanditiis incidunt
          soluta alias aliquid sed. Lorem ipsum dolor sit amet consectetur
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          velit consequatur tenetur ratione doloribus, blanditiis incidunt
          soluta alias aliquid sed. Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="trainerHighlights">
        <h2 className="trainerHeading margin-top-bottom">
          Highlights about the trainer
        </h2>
        <div className="trainer-list">
          <div className="trainerImageSection">
            <img
              src={DATA.trainer_image}
              alt=""
              className="margin-top-botton"
            />
            <h5 className="trainer_name">{DATA.trainer_name}</h5>
            <p>{DATA.trainer_profession}</p>
          </div>
          <ul style={{ listStyleType: "none" }} className="list-items-event">
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
            <li className="list-item-event">
              <CheckIcon />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              minus quia corrupti nisi voluptatibus accusamus numquam veniam?
              Iusto, quidem reprehenderit.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="trainerHeading margin-top-bottom center">
          Sneak Peak Of The Seminar
        </h2>
        <div className="sneakPeakItems">
          {DATA.sneak_peak.map((item, index) => (
            <div className="sneakPeakItem">
              <span className="sneakPeakIndex">{index + 1}</span>
              <span className="sneakPeakData">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-image section-spacing" id="need-assistance">
        <BookDemo />
      </div>
    </div>
  );
}

export default UpcomingEvent;

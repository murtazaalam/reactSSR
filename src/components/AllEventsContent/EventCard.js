import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './allEventsContent.css';
import EventIcon from '../../assets/images/servicesIcon/Get training proof.png'

const useStyles = makeStyles(theme => ({
    
}))
function EventCard({data}) {
    const classes = useStyles();
    let eventDate = new Date(data.startDate);
    let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    console.log("date",data.thumbnail)
  return (
    <div className="event-card-container">
        <div className="event-card-header" style={{background: `linear-gradient(${data.gradient})`}}>
            <img src={`${data.thumbnail}`} width="120" alt="event-thumbnail"/>
        </div>
        <div className="event-card-content">
            <div className="event-card-body">
                <h6>{data.type}</h6>
                <div className="event-card-highlights">
                    <div className="event-card-date">
                        <span>{eventDate.getDay() < 10 ? `0${eventDate.getDay()}` : eventDate.getDay()}</span>
                        <span>{Months[eventDate.getMonth()-1]}</span>
                    </div>
                    <div>
                        <h2>{data.name}</h2>
                        {data.status === "past" && 
                        <span>5000 attenders</span>}
                    </div>
                </div>
            </div>
            <div className="event-card-footer">
                <div className="event-card-venue">{data.venue}</div>
                <div style={{textAlign: "right"}}>
                    {data.status === "live" &&
                    <button className="event-card-btn">Join Now</button>}
                    {data.status === "upcoming" &&
                    <button className="event-card-btn">Register Now</button>}
                    {data.status === "past" &&
                    <button className="event-card-btn">See Details</button>}
                </div>
            </div>
        </div>
    </div>
  );
}

export default EventCard;

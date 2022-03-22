import React from "react";
import EventCard from './EventCard';
import MyCarousel from './MyCarousel';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';

const EventSection = ({items, status}) => {
    let webinarCards = [];
    let workshopCards = [];
    let seminarCards = [];
    let testCards = [];

    if(items){
        let eventByStatus = items.filter(item => {
            return item.status === status
        });
        let webEvents = eventByStatus.filter(item => {
            return item.type === "webinar"
        });
        let workEvents = eventByStatus.filter(item => {
            return item.type === "wrokshop"
        });
        let semEvents = eventByStatus.filter(item => {
            return item.type === "seminar"
        });
        let testEvents = eventByStatus.filter(item => {
            return item.type === "test"
        });
        webinarCards = webEvents.map((data, index) => (
            <EventCard data={data} key={index}></EventCard>
        ));
        workshopCards = workEvents.map((data, index) => (
            <EventCard data={data} key={index}></EventCard>
        ));
        seminarCards = semEvents.map((data, index) => (
            <EventCard data={data} key={index}></EventCard>
        ));
        testCards = testEvents.map((data, index) => (
            <EventCard data={data} key={index}></EventCard>
        ));
    }
    return (
        <div>
            {webinarCards.length > 0 && <div>
                <div className="event-type-heading">
                    <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                    <div className="event-type-title">Webinar</div>
                </div>
                <MyCarousel items={webinarCards} leftArrow={`event-card-left-arrow`} rightArrow={`event-card-right-arrow`} />
            </div>}
            {workshopCards.length > 0 && <div>
                <div className="event-type-heading">
                    <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                    <div className="event-type-title">Workshop</div>
                </div>
                <MyCarousel items={workshopCards} leftArrow={`event-card-left-arrow`} rightArrow={`event-card-right-arrow`} />
            </div>}
            {seminarCards.length > 0 && <div>
                <div className="event-type-heading">
                    <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                    <div className="event-type-title">Seminar</div>
                </div>
                <MyCarousel items={seminarCards} leftArrow={`event-card-left-arrow`} rightArrow={`event-card-right-arrow`} />
            </div>}
            {testCards.length > 0 && <div>
                <div className="event-type-heading">
                    <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                    <div className="event-type-title">Test</div>
                </div>
                <MyCarousel items={testCards} leftArrow={`event-card-left-arrow`} rightArrow={`event-card-right-arrow`} />
            </div>}
        </div>
    )
}
export default EventSection;
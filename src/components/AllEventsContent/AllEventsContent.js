import React from 'react';
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AliceCarousel from "react-alice-carousel";
import EventCard from './EventCard';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import LaptopIcon from '@mui/icons-material/Laptop';
import eventsApi from '../../apis/api/GetEvents';
import MyCarousel from './MyCarousel';
import './allEventsContent.css';

const responsive = {
    400: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1300: { items: 3 },
    1400: { items: 4 },
    1750: { items: 5 }
  };
let itemData = [1,2,3,4,5]
let items = itemData.map((data, index) => (
    <EventCard data={data} key={index}></EventCard>
));
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
const useStyles = makeStyles(theme => ({
    title:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))
    
const AllEventsContent = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [eventData, setEventData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [liveEvents, setLiveEvents] = useState();
    const [upcomingEvents, setUpcomingEvents] = useState();
    const [pastEvents, setPastEvents] = useState();
    const [webinars, setWebinars] = useState();
    const [seminars, setSeminars] = useState();
    const [workshops, setWorkshops] = useState();
    const [test, setTest] = useState();

    useEffect(() => {
        if(!eventData){
            getEvents()
        }
    },[])
    
    const getEvents = async() => {
        let data = await eventsApi("", setEventData, setLoading, setError);
        if(data){
            let liveEvents = data.filter(item => {
                return item.status === "live"
            });
            let upEvents = data.filter(item => {
                return item.status === "upcoming"
            });
            let pastEvents = data.filter(item => {
                return item.status === "past"
            });
            let webinarEvents = data.filter(item => {
                return item.type === "webinar"
            });
            let seminarEvents = data.filter(item => {
                return item.type === "seminar"
            });
            let workshopEvents = data.filter(item => {
                return item.type === "workshop"
            });
            let testEvents = data.filter(item => {
                return item.type === "test"
            });
            let liveEventsData = liveEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let upcomingEventsData = upEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let pastEventsData = pastEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let webinarEventsData = webinarEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let seminarEventsData = seminarEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let workshopEventsData = workshopEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            let testEventsData = testEvents.map((data, index) => (
                <EventCard data={data} key={index}></EventCard>
            ));
            setLiveEvents(liveEventsData);
            setUpcomingEvents(upcomingEventsData);
            setPastEvents(pastEventsData);
            setWebinars(webinarEventsData);
            setSeminars(seminarEventsData);
            setWorkshops(workshopEventsData);
            setTest(testEventsData)
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box component="section" className="events-card-section">
                <Typography component="div" className={classes.title}>
                    <Typography component="div">

                    </Typography>
                    <Typography component="div" className="event-page-title">
                        Events
                    </Typography>
                    <Typography component="div">
                        
                    </Typography>
                </Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="event-tab-aria">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Live" {...a11yProps(0)} />
                        <Tab label="All" {...a11yProps(1)} />
                        <Tab label="Upcoming Events" {...a11yProps(2)} />
                        <Tab label="Past Events" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="event-type-heading">
                        <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                        <div className="event-type-title">Live</div>
                    </div>
                    <MyCarousel items={liveEvents} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>
                        <div className="event-type-heading">
                            <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                            <div className="event-type-title">Live</div>
                        </div>
                        <MyCarousel items={liveEvents} />
                    </div>
                    <div>
                        <div className="event-type-heading">
                            <div className="event-type-icon"><sup><LaptopIcon/></sup></div>
                            <div className="event-type-title">Webinars</div>
                        </div>
                        <MyCarousel items={webinars} />
                    </div>
                    <div>
                        <div className="event-type-heading">
                            <div className="event-type-icon"><sup><LaptopIcon/></sup></div>
                            <div className="event-type-title">Seminars</div>
                        </div>
                        <MyCarousel items={seminars} />
                    </div>
                    <div>
                        <div className="event-type-heading">
                            <div className="event-type-icon"><sup><LaptopIcon/></sup></div>
                            <div className="event-type-title">Workshops</div>
                        </div>
                        <MyCarousel items={workshops} />
                    </div>
                    <div>
                        <div className="event-type-heading">
                            <div className="event-type-icon"><sup><LaptopIcon/></sup></div>
                            <div className="event-type-title">Tests</div>
                        </div>
                        <MyCarousel items={test} />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="event-type-heading">
                        <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                        <div className="event-type-title">Upcoming Events</div>
                    </div>
                    <MyCarousel items={upcomingEvents} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="event-type-heading">
                        <div style={{transform: 'rotate(-45deg)'}} className="event-type-icon"><sup><SpeakerPhoneIcon/></sup></div>
                        <div className="event-type-title">Past Events</div>
                    </div>
                    <MyCarousel items={pastEvents} />
                </TabPanel>
            </Box>
        </>
    )
}
export default AllEventsContent;
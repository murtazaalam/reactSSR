import * as React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EventBackgroundImage from '../../assets/images/event_header_image.svg';
import EventImage from '../../assets/images/event_icon_demo.svg';
import './events.css';

const Events = () => {
    let eventsCard = [1,2,3,4,5];
    return (
        <>
            <Box component="section" className="page-heading" sx={{background:`url(${EventBackgroundImage})`}}> 
                <div className="course-container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html" className="home">
                                    Home
                                    <div className="line"></div>
                                </a>
                            </li>
                            <li className="breadcrumb-item active">
                                Events
                            </li>
                        </ol>
                    </nav>
                    <h1 className="event-heading">Events</h1>
                </div>
            </Box>
            <Box component="section" className="courses-area">
                <Box component="div" className="event-aria">
                    <Typography component="h3">Events</Typography>
                    <Box className="div" sx={{display: "flex"}}>
                        <Typography component="p" className="view-text">Views: </Typography>
                        <Typography sx={{marginRight: "6px", cursor: "pointer"}} component="span" className="active-view">
                            <ViewComfyIcon/>
                        </Typography>
                        <Typography component="span" sx={{cursor: "pointer"}}>
                            <TableRowsIcon/>
                        </Typography>
                    </Box>
                </Box>
                <Box component="div" sx={{display: "flex",paddingTop: "20px"}} className="event-body">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <Box component="div" className="row" className="event-menu">
                            <Typography component="h6" className="active-event-menu">Upcoming Events</Typography>
                            <Typography component="h6">Past Events</Typography>
                        </Box>
                        
                        <Box component="h6" className="">
                            
                        </Box>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 col-12">
                        {eventsCard.map((cards, index) => {
                            return(
                                <Card sx={{ minWidth: 175, minHeight: 320 }} className="event-card-box" key={index}>
                                    <CardContent className="event-card" sx={{height:200}}>
                                        <img src={EventImage} width="100"/>
                                    </CardContent>
                                    <CardActions sx={{flexDirection: 'column'}}>
                                        <Typography component="h6" className="event-name">Event Name</Typography>
                                        <Typography component="div" className="event-details">
                                            <Typography component="p" className="event-date">09-01-2021</Typography>
                                            <Typography component="p" className="event-">
                                                <Button variant="contained" color="success" size="small" className="">Register Now</Button>
                                            </Typography>
                                        </Typography>
                                    </CardActions>
                                </Card>
                            )
                        })}
                        <div className="pagination">
                            <Stack spacing={2}>
                                <Pagination count={5} color="success" />
                            </Stack>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    )
}
export default Events;
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import singleEventApi from "../../apis/api/SingleEvent";
import { makeStyles } from "@material-ui/core/styles";
import EventBackgroudImage from "../../assets/images/hill-01.jpg";
import "./singleEvent.css";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
    root: { 
        background: `url(${EventBackgroudImage})`,
        height: "200px",
        width: "100%",
        marginTop: "136px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
    },
    heading:{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "end"
    },
    headingText:{
        fontSize: "24px",
        fontWeight: 600,
        color: "#fff",
        paddingBottom: "10px"
    }
})
const SingleEvent = () => {
    const classes = useStyles();
    const [event, getEvent] = useState();
    const params = useParams();
    useEffect(() => {
        if(!event){
            singleEventApi(params.id, getEvent);
        }
    }, [event])
    
    return (
        <>  
            <Box 
                component="section"
                className={classes.root}

            >
                {event &&
                    <Typography component="div" className={classes.heading}>
                        <Typography component="h2" className={classes.headingText}>
                            {event[0].name}
                        </Typography>
                    </Typography>
                }
            </Box>
            <Box
                component="section"
            >
            </Box>
        </>
    )
}
export default SingleEvent;
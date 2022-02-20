import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import singleEventApi from "../../apis/api/SingleEvent";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ShareIcon from "@material-ui/icons/Share";
import EventBackgroudImage from "../../assets/images/hill-01.jpg";
import "./singleEvent.css";
import { Typography } from "@mui/material";
import RightPanel from "../contactUs/forHiring/RightPanel";

const useStyles = makeStyles({
  root: {
    background: `url(${EventBackgroudImage})`,
    height: "374px",
    width: "100%",
    marginTop: "129px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
    padding: "10px 52px",
  },
  heading: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "left",
    alignItems: "end",
  },
  headingText: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#fff",
    paddingBottom: "10px",
  },
  sectionPadding: {
    padding: "10px 52px",
  },
  registerBox: {
    border: "1px solid",
    margin: "22px 0px 0px 0px",
    width: "278px",
    textAlign: "center",
    padding: "0",
    boxShadow: "0px 4px 16px lightgrey",
    borderRadius: "7px",
  },
});
const SingleEvent = () => {
  const classes = useStyles();
  const [event, getEvent] = useState();
  const params = useParams();
  useEffect(() => {
    if (!event) {
      singleEventApi(params.id, getEvent);
    }
  }, [event]);

  return (
    <>
      <Box component="section" className={classes.root}>
        {event && (
          <Typography component="div" className={classes.heading}>
            <Typography component="h2" className={classes.headingText}>
              {event.name}
            </Typography>
          </Typography>
        )}
      </Box>
      <Box
        component="section"
        className={classes.sectionPadding}
        sx={{ borderBottom: "1px solid" }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <a underline="hover" color="inherit">
            Home
          </a>
          <a
            underline="hover"
            color="inherit"
          >
            Event
          </a>
          <Typography color="text.primary">{event && event.name}</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        component="div"
        sx={{ flexGrow: 1, mt: 2, mb: 2 }}
        className={classes.sectionPadding}
      >
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Overview
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="p" sx={{ lineHeight: "28px" }}>
              {event && event.description}
            </Typography>
            {/* <Typography 
                            variant="h5"
                            sx={{mb:2}}
                        >
                            Become a certified Excel ninja with our #1 online Excel training
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{lineHeight: '28px'}}
                        >
                            Looking for Microsoft Excel training to improve your skills and save you time?
                            GoSkills Basic and Advanced online Excel courses can quickly get you up to speed with Excel, taking you 
                            from complete novice to Excel ninja.
                        </Typography>
                        <Typography 
                            variant="h5"
                            sx={{mt:2,mb:2}}
                        >
                            Online Excel classes to help unlock your potential
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{lineHeight: '28px'}}
                        >
                            Looking for Microsoft Excel training to improve your skills and save you time?
                            GoSkills Basic and Advanced online Excel courses can quickly get you up to speed with Excel, taking you 
                            from complete novice to Excel ninja.
                        </Typography> */}
          </Grid>
          <Grid item sx={3}>
            <RightPanel />
            {/* <Typography 
                            variant="div"
                        >
                            <Typography 
                                variant="p"
                                sx={{fontWeight: 600}}
                            >
                                Register Now
                            </Typography>
                            <TextField 
                                id="standard-basic" 
                                label="Name" 
                                variant="standard" 
                            />
                            <TextField 
                                id="standard-basic" 
                                label="Email" 
                                variant="standard" 
                                sx={{mt:1}}
                            />
                            <TextField 
                                id="standard-basic" 
                                label="Mobile" 
                                variant="standard" 
                                sx={{mt:1,mb:2}}
                            />
                            <button 
                                className=" btn-grad"
                                style={{width: "200px"}}
                            >
                                Register Now
                            </button>
                        </Typography>
                        <Typography variant="div">
                            <div className="share-now" style={{marginBottom: '10px'}}>
                                <span className="share-text">share now</span>
                                <span className="share-icon"><ShareIcon/></span>
                            </div>
                        </Typography> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SingleEvent;

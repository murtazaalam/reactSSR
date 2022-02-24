import React from "react";
import EventBackgroundImage from "../../assets/images/contactUs-hirinh.webp";
import { Grid, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Banner from "../../components/Generic/Banner/Banner";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { AboutUs, TopClient } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";
import "./contact-us.css";

function contactUsForHiring() {
  return (
    <>
      <Box
        className="page-heading"
        sx={{
          background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/contact+us.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">Contact Us</li>
            </ol>
          </nav>
          <h1 className="event-heading">Contact Us</h1>
        </div>
      </Box>
      <div className="contactus">
        <Grid container>
          <Grid item xs={6.5} className="left-card-position">
            <div>
              <LeftPanel heading="For Hiring" />
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            //   style={{ border: "2px solid black" }}
            className="right-form-position"
          >
            <div>
              <h5>
                Contact Us for Hiring
                <InfoIcon />
              </h5>

              <RightPanel />
            </div>
          </Grid>

          <Grid item xs={12}>
            <section style={{ paddingTop: "30px" }}>
              <AboutUs title="About us"></AboutUs>
              <TopClient title="Our College/University partners:"></TopClient>
            </section>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default contactUsForHiring;

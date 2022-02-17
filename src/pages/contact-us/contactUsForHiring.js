import React from "react";
import EventBackgroundImage from "../../assets/images/contactUs-hirinh.webp";
import { Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Banner from "../../components/Generic/Banner/Banner";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { AboutUs, TopClient } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";
import "./contact-us.css";

function contactUsForHiring() {
  return (
    <>
      <Banner
        backgroundImage={EventBackgroundImage}
        breadcrumb="contact-us-for-hiring"
        heading="Contact Us"
      />
      <Grid container>
        <Grid item xs={8} className="left-card-position">
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
          <section>
            <AboutUs title="About us"></AboutUs>
            <TopClient title="Our College/University partners:"></TopClient>
          </section>
        </Grid>
      </Grid>
    </>
  );
}

export default contactUsForHiring;

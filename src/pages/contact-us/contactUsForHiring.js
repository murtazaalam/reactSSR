import { Grid } from "@mui/material";
import React from "react";
import EventBackgroundImage from "../../assets/images/contactUs-hirinh.webp";
import InfoIcon from "@mui/icons-material/Info";
import Banner from "../../components/Banner/Banner";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { TopClient } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";

function contactUsForHiring() {
  return (
    <>
      <Banner
        backgroundImage={EventBackgroundImage}
        breadcrumb="contact-us-for-hiring"
      />
      <Grid container>
        <Grid item xs={6} style={{ border: "2px solid black" }}>
          <div>
            <LeftPanel />
          </div>
        </Grid>
        <Grid item xs={6} style={{ border: "2px solid black" }}>
          <div>
            Contact Us for more Info
            <InfoIcon />
            <RightPanel />
          </div>
        </Grid>
        <Grid item xs={12} style={{ border: "2px solid black" }}>
          <TopClient />
        </Grid>
      </Grid>
    </>
  );
}

export default contactUsForHiring;

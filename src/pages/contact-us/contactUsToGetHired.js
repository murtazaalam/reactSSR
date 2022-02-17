import React from "react";
import Banner from "../../components/Generic/Banner/Banner";
import { Grid } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import LeftPanel from "../../components/contactUs/forHiring/leftPanel";
import { Typography, Container } from "@mui/material";
import { HiringPartners } from "../../components";
import RightPanel from "../../components/contactUs/forHiring/RightPanel";
import "./contact-us.css";
import EventBackgroundImage from "../../assets/images/contactUs-hirinh.webp";
function contactUsToGetHired() {
  return (
    <>
      <Banner
        backgroundImage={EventBackgroundImage}
        breadcrumb="contact-us-to-get-hired"
        heading="Contact Us"
      />
      <Grid container>
        <Grid item xs={8} className="left-card-position">
          <div>
            <LeftPanel heading="PLacement Opportunities" />
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
              Contact Us for placement Opportunities
              <InfoIcon />
            </h5>

            <RightPanel />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="bg-image bg-image hiring-partner-section">
            <Container className="section-spacing">
              <Typography component="div" className="techvanto-whyus ">
                <Typography component="h2" className="techvanto-whyus-heading">
                  Hiring Partners
                </Typography>
              </Typography>
              <HiringPartners />
            </Container>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default contactUsToGetHired;

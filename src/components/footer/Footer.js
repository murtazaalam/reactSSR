import * as React from "react";
import { Container, IconButton } from "@mui/material";
import Services from "../../data/services/Services";
import logo from "../../assets/images/logo-print-hd-transparent-removebg-preview.png";
import "./Footer.css";
import InputBase from "@mui/material/InputBase";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="techvanto-footer">
      <section className="techvant-footer-upper-part">
        <br />
        <br />
        <Container className="maxWidthNone">
          <div className="display-grid fr5 techvanto-footer-grid">
            <div style={{ placeSelf: "start" }}>
              <div className="techvanto-footer-text-header color">
                <img src={logo} alt="" />{" "}
              </div>
              <div className="text-small techvanto-footer-text-header">
                <LinkedInIcon />
                <FacebookRoundedIcon /> <InstagramIcon />
                <div className="search-item">
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    color="secondary"
                  />
                  <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div style={{ placeSelf: "center" }}>
              <div className="techvanto-footer-text-header color">
                Top Courses{" "}
              </div>
              {["Web Development", "Data Science", "Machine Learning"].map(
                (data, index) => (
                  <p className="techvanto-footer-text text-small">{data}</p>
                )
              )}
            </div>
            <div>
              <div className="techvanto-footer-text-header color">
                Services{" "}
              </div>
              {Services.map(
                (data, index) =>
                  index <= 5 && (
                    <p className="techvanto-footer-text text-small">
                      {data.text}
                    </p>
                  )
              )}
            </div>

            <div>
              <div className="techvanto-footer-text-header color ">FAQ </div>
              <p className="techvanto-footer-text text-small">
                Discussion Forum
              </p>
              <p className="techvanto-footer-text text-small">Blog</p>
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>
              <br />

              <div className="techvanto-footer-text-header color">
                Oppurtunities{" "}
              </div>
              <p className="techvanto-footer-text text-small">
                Upcoming And Past Events
              </p>
              <p className="techvanto-footer-text text-small">
                Campus Ambassador
              </p>
              <p className="techvanto-footer-text text-small">Carrer/ Jobs</p>
            </div>
            <div>
              <br />
              <div className="techvanto-footer-text-header color">
                Contact Us
              </div>
              <p className="techvanto-footer-text text-small">Hire With Us</p>
              <p className="techvanto-footer-text text-small">Get Hired</p>
              <p className="techvanto-footer-text text-small">
                Train Your Team
              </p>
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>
              <br />
              <div className="techvanto-footer-text-header color">Contact </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-extra-small">
                  12/13, New Horizon Complex,Near TXN Mall,M.B. Road, Banglore,
                  India
                </p>
              </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-extra-small">
                  12/13, New Horizon Complex,Near TXN Mall,M.B. Road, Banglore,
                  India
                </p>
              </div>

              <br />
            </div>
          </div>
        </Container>
      </section>
      <section className="techvanto-footer-lower-part">
        <section className="techvanto-footer-policies">
          <Container className="techvanto-policies">
            <div className="text-small">Policies</div>
            <div className="text-small">
              Terms & Conditions / Privacy Policy / Payment Policy / Placement
              Policy
            </div>
          </Container>
        </section>
        <section className="techvanto-footer-copyright">
          {/* <CopyrightIcon /> */}
          All Right Reserved. Techvanto Pvt. Ltd.
        </section>
      </section>
    </section>
  );
};

export default Footer;

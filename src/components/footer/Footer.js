import * as React from "react";
import { Container } from "@mui/material";
import Services from "../../data/services/Services";
import logo from "../../assets/images/on-scroll-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="techvanto-footer">
      <section className="techvant-footer-upper-part">
        <br />
        <br />

        <Container className="maxWidthNone">
          <div className="display-grid fr5 techvanto-footer-grid">
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                <img src={logo} alt="" />{" "}
              </div>
              <div className="text-small techvanto-footer-text-header follow-links">
                <p className="social">
                  <a
                    rel="noopener"
                    href="https://www.facebook.com"
                    className="social-link icon-link-padding"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      <path d="M148 45h-18.47c-7.36 0-8.89 3-8.89 10.64v16.75H148l-2.86 27.36h-24.5v95.75h-41V99.75H52.25V72.39h27.36V40.82C79.61 16.63 92.34 4 121 4h27Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener"
                    href="https://twitter.com"
                    className="social-link icon-link-padding"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      <path d="M197.41 39.58a79.67 79.67 0 0 1-23 6.29A40 40 0 0 0 192 23.76a80 80 0 0 1-25.39 9.7 40 40 0 0 0-68.08 36.45 113.51 113.51 0 0 1-82.38-41.76 40 40 0 0 0 12.37 53.37 39.88 39.88 0 0 1-18.1-5 40 40 0 0 0 32.06 39.69 40 40 0 0 1-18 .68 40 40 0 0 0 37.34 27.76 80.41 80.41 0 0 1-59.23 16.56 113.14 113.14 0 0 0 61.27 17.95c74.21 0 116.14-62.67 113.6-118.89a81.42 81.42 0 0 0 19.95-20.69Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener"
                    href="https://www.linkedin.com/company"
                    className="social-link icon-link-padding"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      <path d="M47.65 194.5H11.76V62.88h35.89ZM29.71 47.71a21.11 21.11 0 1 1 20.93-21.1 21 21 0 0 1-20.93 21.1ZM191.23 194.5h-35.89v-67c0-40.3-47.86-37.25-47.86 0v67h-35.9V62.88h35.9V84c16.7-30.94 83.75-33.22 83.75 29.63Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener"
                    href="https://www.instagram.com/"
                    className="social-link icon-link-padding"
                  >
                    <svg
                      className="svg-icon "
                      data-name=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                    >
                      <path d="M151.4 38.08a11.53 11.53 0 1 0 11.53 11.53 11.53 11.53 0 0 0-11.53-11.53Zm-51.22 14.78a48.41 48.41 0 1 0 48.4 48.4 48.47 48.47 0 0 0-48.4-48.4Zm0 79.41a31 31 0 1 1 31-31 31 31 0 0 1-31 31ZM197.84 61a59 59 0 0 0-59-59H60.88a59 59 0 0 0-59 59v78a59 59 0 0 0 59 59h77.92a59 59 0 0 0 59-59Zm-18.49 78a40.54 40.54 0 0 1-40.55 40.55H60.88A40.55 40.55 0 0 1 20.33 139V61a40.55 40.55 0 0 1 40.55-40.51h77.92A40.54 40.54 0 0 1 179.35 61Z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Top Courses{" "}
              </div>
              {[
                "Web Development",
                "Data Science",
                "Machine Learning",
                "Full stack development",
                "Data Structures and Algorithm",
                "Basics of Java",
                "Block Chain",
              ].map((data, index) => (
                <p className="techvanto-footer-text text-small">{data}</p>
              ))}
            </div>
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Services{" "}
              </div>
              {Services.map(
                (data, index) =>
                  index <= 6 && (
                    <p className="techvanto-footer-text text-small">
                      {data.text}
                    </p>
                  )
              )}
            </div>

            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color ">FAQ </div>
              <p className="techvanto-footer-text text-small">
                Discussion Forum
              </p>
              <p className="techvanto-footer-text text-small">Blog</p>
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>

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
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Contact Us
              </div>
              <p className="techvanto-footer-text text-small">Hire With Us</p>
              <p className="techvanto-footer-text text-small">Get Hired</p>
              <p className="techvanto-footer-text text-small">
                Train Your Team
              </p>

              <div className="techvanto-footer-text-header color">Contact </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-small">
                  12/13, New Horizon Complex,Near TXN Mall,M.B. Road, Banglore,
                  India
                </p>
              </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-small">
                  12/13, New Horizon Complex,Near TXN Mall,M.B. Road, Banglore,
                  India
                </p>
              </div>
            </div>
          </div>
        </Container>
        <br />
        <br />
      </section>
      <section className="techvanto-footer-lower-part">
        <section className="techvanto-footer-policies">
          <Container className="techvanto-policies">
            <div className="text-small" style={{ marginTop: "1rem" }}>
              Policies
            </div>
            <div
              className="text-small"
              style={{ display: "flex", placeContent: "space-between" }}
            >
              <p>
                Terms & Conditions / Privacy Policy / Payment Policy / Placement
                Policy
              </p>
              <p>All Right Reserved. Techvanto Pvt. Ltd.</p>
            </div>
          </Container>
          {/* <section className="techvanto-footer-copyright"> */}
          {/* <CopyrightIcon /> */}
          {/* </section> */}
        </section>
      </section>
    </section>
  );
};

export default Footer;

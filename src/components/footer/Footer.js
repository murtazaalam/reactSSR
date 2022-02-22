import * as React from "react";
import { Container } from "@mui/material";
import Services from "../../data/services/Services";
import logo from "../../assets/images/on-scroll-logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import getTopCourseApi from "../../apis/api/TopCourses";
import insta from "../../assets/images/instagram.ico";
const Footer = () => {
  const [topCourses, setTopCourses] = React.useState([]);
  React.useEffect(() => {
    getTopCourseApi(setTopCourses);
  }, []);
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
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/techvantoacademy/"
                    className="social-link icon-link-padding"
                    target="_blank"
                    style={{ color: "red" }}
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#0251A0"
                    >
                      <path d="M148 45h-18.47c-7.36 0-8.89 3-8.89 10.64v16.75H148l-2.86 27.36h-24.5v95.75h-41V99.75H52.25V72.39h27.36V40.82C79.61 16.63 92.34 4 121 4h27Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/TechvantoA?t=AZr-Uor2sg4-L2vvynXk4A&s=08"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#0A7BEC"
                    >
                      <path d="M197.41 39.58a79.67 79.67 0 0 1-23 6.29A40 40 0 0 0 192 23.76a80 80 0 0 1-25.39 9.7 40 40 0 0 0-68.08 36.45 113.51 113.51 0 0 1-82.38-41.76 40 40 0 0 0 12.37 53.37 39.88 39.88 0 0 1-18.1-5 40 40 0 0 0 32.06 39.69 40 40 0 0 1-18 .68 40 40 0 0 0 37.34 27.76 80.41 80.41 0 0 1-59.23 16.56 113.14 113.14 0 0 0 61.27 17.95c74.21 0 116.14-62.67 113.6-118.89a81.42 81.42 0 0 0 19.95-20.69Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/techvantoacademy"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <svg
                      className="svg-icon "
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      fill="#1479DE"
                    >
                      <path d="M47.65 194.5H11.76V62.88h35.89ZM29.71 47.71a21.11 21.11 0 1 1 20.93-21.1 21 21 0 0 1-20.93 21.1ZM191.23 194.5h-35.89v-67c0-40.3-47.86-37.25-47.86 0v67h-35.9V62.88h35.9V84c16.7-30.94 83.75-33.22 83.75 29.63Z" />
                    </svg>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://instagram.com/techvanto.academy?utm_medium=copy_link"
                    className="social-link icon-link-padding"
                    target="_blank"
                  >
                    <img
                      src={insta}
                      alt=""
                      style={{ bottom: "6px", width: "28px" }}
                    />
                  </a>
                </p>
              </div>
            </div>
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Top Courses{" "}
              </div>
              {topCourses.map((data, index) => (
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={`/courses/${data._id}`}
                  className="techvanto-footer-text text-small"
                >
                  <p className="techvanto-footer-text text-small">
                    {data.course_name}
                  </p>
                </a>
              ))}
            </div>
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Services{" "}
              </div>
              {Services.map(
                (data, index) =>
                  index <= 6 && (
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="/coming-soon"
                      className="techvanto-footer-text text-small"
                    >
                      <p>{data.text}</p>
                    </a>
                  )
              )}
            </div>

            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color ">FAQ </div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/coming-soon"
                className="techvanto-footer-text text-small"
              >
                <p className="techvanto-footer-text text-small">
                  Discussion Forum
                </p>
              </a>

              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/blogs"
                className="techvanto-footer-text text-small"
              >
                <p className="techvanto-footer-text text-small">Blog</p>
              </a>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/coming-soon"
                className="techvanto-footer-text text-small"
              >
                <p className="techvanto-footer-text text-small">
                  Reasearch & Project
                </p>
              </a>

              <div className="techvanto-footer-text-header color">
                Oppurtunities{" "}
              </div>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/events"
                className="techvanto-footer-text text-small"
              >
                <p className="techvanto-footer-text text-small">
                  Upcoming And Past Events
                </p>
              </a>
              <a
                href="/#campusAmbassador"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="techvanto-footer-text text-small">
                  Campus Ambassador
                </p>{" "}
              </a>
              <a
                href="/coming-soon"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="techvanto-footer-text text-small">Carrer/ Jobs</p>
              </a>
            </div>
            <div style={{ height: "-webkit-fill-available" }}>
              <div className="techvanto-footer-text-header color">
                Contact Us
              </div>
              <a
                href="/contact-us-for-hiring"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="techvanto-footer-text text-small">Hire With Us</p>
              </a>
              <a
                href="/contact-us-to-get-hired"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="techvanto-footer-text text-small">Get Hired</p>
              </a>
              <a
                href="/coming-soon"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="techvanto-footer-text text-small">
                  Train Your Team
                </p>
              </a>

              <div className="techvanto-footer-text-header color">Contact </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-small">
                  R7, 3rd floor, MG Road, Ghitorni, New Delhi 110030
                </p>
              </div>
              <div className="techvanto-footer-text">
                {/* <PermContactCalendarIcon></PermContactCalendarIcon> */}
                <p className="text-small">+91-9646206032</p>
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
              <div style={{ display: "flex" }}>
                <Link to="/terms-and-conditions" style={{ color: "white" }}>
                  <p>Terms & Conditions </p>
                </Link>
                /
                <Link to="/privacy-policy" style={{ color: "white" }}>
                  <p>Privacy Policy </p>
                </Link>
                /
                <Link to="/placement-policy" style={{ color: "white" }}>
                  <p>Placement Policy </p>
                </Link>
                /
                <Link to="/payment-policy" style={{ color: "white" }}>
                  <p>Payment Policy </p>
                </Link>
              </div>
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

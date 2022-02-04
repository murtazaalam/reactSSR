import * as React from "react";
import { Link } from "react-router-dom";

// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
// import CopyrightIcon from "@mui/icons-material/Copyright";
import { Container } from "@mui/material";

//import Map from './Map/GoogleMap';
//import navbarApi from "../../Core/api/services/navigation";
import Services from "../../data/services/Services";
//import "./Assets/footer.css";
import "./Footer.css";
// const location = {
//     address: 'Techvanto Academy.',
//     lat: 30.160999,
//     lng: 76.869698,
// }
const Footer = () => {
  //   const [navbarData, setNavbarData] = React.useState([]);
  //   React.useEffect(() => {
  //     setNavbarData(Services);
  //   }, []);
  //   console.log(navbarData);
  return (
    <section className="techvanto-footer">
      <section className="techvant-footer-upper-part">
        <br />
        <br />
        <Container>
          <div className="display-grid fr4 techvanto-footer-grid">
            {/* <div>
              <div className="techvanto-footer-text-header">Services </div>
              {Services.map((data, index) => {
                return (
                  <Link
                    to={data.link}
                    className="techvanto-footer-link"
                    key={index}
                  >
                    <p className="techvanto-footer-text text-small">
                      {data.text}
                    </p>
                  </Link>
                );
              })}
            </div> */}
            {/* <div>
              <div className="techvanto-footer-text-header">Courses </div>
              {navbarData && navbarData.length !== 0
                ? navbarData[0].sectioncategories.map((data) => {
                    return (
                      <Link
                        to={`/category/${data.title}/${data.id}`}
                        className="techvanto-footer-link"
                      >
                        <p className="techvanto-footer-text text-small">
                          {data.title}
                        </p>
                      </Link>
                    );
                  })
                : ""}
            </div> */}
            <div>
              <div className="techvanto-footer-text-header">FAQ </div>
              <div className="techvanto-footer-text-header">Resourses </div>
              <p className="techvanto-footer-text text-small">
                Discussion Forum
              </p>
              <p className="techvanto-footer-text text-small">Blog</p>
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>
              <br />

              <div className="techvanto-footer-text-header">Oppurtunities </div>
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
              <div className="techvanto-footer-text-header">Contact Us</div>
              <p className="techvanto-footer-text text-small">Hire With Us</p>
              <p className="techvanto-footer-text text-small">
                Organise Workshop
              </p>
              <p className="techvanto-footer-text text-small">
                Reasearch & Project
              </p>
              <br />
              <div className="techvanto-footer-text-header">Contact </div>
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
              {/* <div className="techvanto-footer-text-header" >Find Us    </div> */}
              {/* <Map location={location} zoomLevel={17}></Map> */}
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

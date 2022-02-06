import { Typography, Container } from "@mui/material";

import {
  ContentHeaderImage,
  WhatAndWhyWeDo,
  AboutUs,
  TopClient,
  Slider,
  HiringPartners,
  ServiceGrid,
  TopCourses,
  CampusAmbassador,
  WhyUs,
  WhatOurStudentSays,
  BookDemo,
} from "../../components/index1";
const Home = () => {
  return (
    <>
      <ContentHeaderImage />
      <br />
      <WhatAndWhyWeDo />
      <br />
      <section className="techvanto-aboutus-section section-spacing">
        <AboutUs title="About us"></AboutUs>
        <TopClient title="Our College/University partners:"></TopClient>
      </section>
      <br />
      <Slider />
      <br />
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
      <br />
      <ServiceGrid />
      <div className="bg-image">
        <TopCourses />
      </div>
      <br />
      <CampusAmbassador />
      <br />
      <div className="bg-image section-spacing">
        <WhyUs />
      </div>
      <div className="background">
        <WhatOurStudentSays name="Home"></WhatOurStudentSays>
      </div>
      <div className="bg-image section-spacing">
        <BookDemo />
      </div>
    </>
  );
};
export default Home;

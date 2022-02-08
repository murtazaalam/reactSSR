/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import StudentCard from "./StudentCard/StudentCard";
import { Typography, Container } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "./StudentSays.css";
//import StudentSays from "../../Core/api/services/StudentSays";
import test1 from "../../assets/images/Testimony/testimony1.jpg";
import test2 from "../../assets/images/Testimony/testimony1.jpg";
import test3 from "../../assets/images/Testimony/testimony1.jpg";
//const handleDragStart = (e) => e.preventDefault();
const responsive = {
  400: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const WhatOurStudentSays = (props) => {
  //const [studentSays, setStudentSays] = React.useState([]);
  const studentSays = [
    {
      pic: test1,
      title: "Siva Teja Pottella",
      destination: "Java",
      overview:
        "The instructor was very articulate and just knew what and how to teach. The course material was quite relevant and rich with a good mix of projects and assignments.",
    },
    {
      pic: test2,
      title: "Vishal Goyal",
      destination: "NodeJs",
      overview:
        "I really appreciate the self-paced, comprehensive structure of the course since I was able to pursue it alongside my work schedule.",
    },
    {
      pic: test3,
      title: "John Junior",
      destination: "Cyber Forensics",
      overview:
        "Considering my needs and experience, every class was so frictionless that it left me super-pumped up for the next one.",
    },
  ];
  // React.useEffect(() => {
  //   StudentSays(props.name, setStudentSays);
  // }, []);
  let items = studentSays.map((data, index) => (
    <StudentCard data={data} key={index}></StudentCard>
  ));
  // let students =[<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>,<StudentCard></StudentCard>];
  return (
    <Container style={{ maxWidth: "1200px" }}>
      <div className="techvanto-student-says">
        <Typography component="div" className="techvanto-whyus ">
          <Typography component="h2" className="techvanto-whyus-heading">
            What our students says about us?
          </Typography>
        </Typography>
        <AliceCarousel
          className="techvanto-student-says-carousel"
          responsive={responsive}
          autoPlayDirection={"rtl"}
          autoPlayStrategy={"none"}
          // disableButtonsControls={true}
          animationEasingFunction={"ease"}
          autoPlay={false}
          controlsStrategy="alternate"
          infinite={true}
          mouseTracking
          items={items}
          renderPrevButton={() => {
            return <div className="left-arrow-studentSays">◄</div>;
          }}
          renderNextButton={() => {
            return <div className="right-arrow-studentSays">►</div>;
          }}
        />
      </div>
    </Container>
  );
};

export default WhatOurStudentSays;

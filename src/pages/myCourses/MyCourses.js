import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../components/Generic/Banner/Banner";
import image from "../../assets/images/myCourses.png";
import ListItem from "../../components/CoursesComponents/List/ListItem/ListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import myOrdersApi from "../../apis/api/MyOders";
import CourseCard from "../../components/TopCourses/CourseCard/CourseCard";
function MyCourses() {
  const [course, setCourse] = useState();
  const item = {
    coverSrc:
      "https://img.freepik.com/free-photo/distance-learning-online-webpage-interface_53876-133740.jpg?w=1380",
    title: "web development",
    price: "500",
    serviceTime: "2 hours",
    rating: 5,
    myCourseCheck: true,
  };
  useEffect(()=> {
    myOrdersApi(setCourse);
  },[]);
  console.log(">>>",course);
  return (
    <div style={{ placeContent: "center" }}>
      <Banner
        backgroundImage={image}
        heading="My Courses"
        breadcrumb="My Courses"
      />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {course && course.map((data, index) => (
            <Grid item>
              <CourseCard
                key={index}
                couseData={data}
                fromMycourse={true}
                // review={data.reviews}
              ></CourseCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MyCourses;

import React from "react";
import Banner from "../../components/Generic/Banner/Banner";
import image from "../../assets/images/myCourses.png";
import ListItem from "../../components/CoursesComponents/List/ListItem/ListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CourseCard from "../../components/TopCourses/CourseCard/CourseCard";
function MyCourses() {
  const topCourses = [
    {
      id: 1,
      title: "Web Development",
      thumbnail: image,
      price: 758,
      gradient: "rgb(28 71 124), #9198e5",
      discount: 500,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Web Development",
      thumbnail: image,
      price: 758,

      gradient: "to right bottom, #ea395d, #eb6085, #e582a6, #dda0bf, #d6bcce",
      discount: 500,
      rating: 3,
    },
  ];
  return (
    <div style={{ placeContent: "center" }}>
      <Banner
        backgroundImage={image}
        heading="My Courses"
        breadcrumb="My Courses"
      />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {topCourses.map((data, index) => (
            <Grid item>
              <CourseCard
                key={index}
                id={data.id}
                title={data.title}
                pic={data.thumbnail}
                gradient={data.gradient}
                price={data.price}
                discount={data.discount}
                rating={data.rating}
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

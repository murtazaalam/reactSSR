import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../components/Generic/Banner/Banner";
import image from "../../assets/images/myCourses.png";
import ListItem from "../../components/CoursesComponents/List/ListItem/ListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import myOrdersApi from "../../apis/api/MyOders";
import CourseCard from "../../components/TopCourses/CourseCard/CourseCard";
import Box from "@mui/material/Box";
import { Navigate } from "react-router-dom";

import Loading from "../../components/Loader";
function MyCourses() {
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    myOrdersApi(setCourse, setLoading, setError);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ placeContent: "center" }}>
          <Box
            component="section"
            className="page-heading"
            sx={{
              background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/my+cart.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="course-container">
              {/* <img src={BlogHead1} alt="" width="15" /> */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    Home
                    <div className="line"></div>
                  </li>
                  <li className="breadcrumb-item active">My Cart</li>
                </ol>
              </nav>
              <h1 className="event-heading">My Cart</h1>
            </div>
          </Box>
          {error ? (
            <Navigate to="/404" />
          ) : (
            <Container maxWidth="lg" sx={{ p: 2 }}>
              <Grid container spacing={3}>
                {course &&
                  course.map((data, index) => (
                    <Grid item>
                      <CourseCard
                        key={index}
                        id={data._id}
                        title={data.course_name}
                        pic={data.course_image}
                        // gradient,
                        // price,
                        // discount,
                        // rating,
                        //couseData={data}
                        fromMycourse={true}
                        // review={data.reviews}
                      ></CourseCard>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          )}
        </div>
      )}
    </>
  );
}

export default MyCourses;

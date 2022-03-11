import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import myOrdersApi from "../../apis/api/MyOders";
import CourseCard from "../../components/TopCourses/CourseCard/CourseCard";
import Box from "@mui/material/Box";
import { Navigate, Link } from "react-router-dom";
import Loading from "../../components/Loader";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import "./myCourse.css";

function MyCourses() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    myOrdersApi(setCourse, setLoading, setError);
  }, []);
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  return (
    <>
      {isLogin ?  
      <div style={{ placeContent: "center" }}>
        <Box
          component="section"
          className="page-heading"
          sx={{
            background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/My+courses.jpg)`,
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
                <li className="breadcrumb-item active">My Courses</li>
              </ol>
            </nav>
            <h1 className="event-heading">My Courses</h1>
          </div>
        </Box>
        {loading ? (
          <Loading />
        ) : course.length === 0 ? (
          <Box sx={{ p: 2, mb: 15, mt: 15, textAlignLast: "center" }}>
            <h5>
              {" "}
              <span style={{ fontWeight: "bolder" }}>No Courses!!!</span> Go to{" "}
              <Link to="/all-courses/all">Marketplace</Link> and get some
              courses.
            </h5>
          </Box>
        ) : (
          <>
            {error ? (
              <Navigate to="/404" />
            ) : (
              <>
                <Container maxWidth="lg" sx={{ p: 2 }}>
                  <Typography variant="h4" component="h4">Course</Typography>
                  <Grid container spacing={3}>
                    {course &&
                      course.map((data, index) => (
                        <Grid item>
                          {data.data.course_type === "course" &&
                            <CourseCard
                              key={index}
                              id={data.data.course_id}
                              title={data.data.course_name}
                              pic={data.data.course_image}
                              noOfReviews={data.data.reviews}
                              courseType={data.data.course_type}
                              gradient={data.data.gradient}
                              price={data.data.price}
                              eventDate={data.data.event_date}
                              courseType={data.data.course_type}
                              // discount,
                              rating={data.data.avg_rating}
                              //couseData={data}
                              fromMycourse={true}
                              // review={data.reviews}
                            ></CourseCard>}
                        </Grid>
                      ))}
                  </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ p:2 }}>
                  <Typography variant="h4" component="h4">Event</Typography>
                  <Grid container spacing={3}>
                    {course &&
                      course.map((data, index) => (
                        
                        <Grid item sx={{paddingLeft: '16px !important'}}>
                          {data.data.course_type === "event" &&
                            <CourseCard
                              key={index}
                              id={data.data.event_id}
                              title={data.data.event_name}
                              pic={data.data.event_image}
                              noOfReviews={data.data.reviews}
                              courseType={data.data.course_type}
                              gradient={data.data.gradient}
                              price={data.data.price}
                              eventDate={data.data.event_date}
                              courseType={data.data.course_type}
                              // discount,
                              rating={data.data.avg_rating}
                              //couseData={data}
                              fromMycourse={true}
                              // review={data.reviews}
                            ></CourseCard>}
                        </Grid>
                      ))}
                  </Grid>
                </Container>
              </>
            )}
          </>
        )}
      </div>:
        <Navigate to="/" />
      }
    </>
  );
}

export default MyCourses;

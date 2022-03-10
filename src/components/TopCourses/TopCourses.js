/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./TopCourses.css";
import { Link } from "react-router-dom";
import image from "../../assets/Svgs/course.svg";
import getTopCourseApi from "../../apis/api/TopCourses";
import myOrdersApi from "../../apis/api/MyOders";
import { useSelector } from "react-redux";

const TopCourses = () => {
  const [topCourses, setTopCourses] = React.useState([]);
  const [course, setCourse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let baughtCourseOnly = [];
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);

  React.useEffect(async () => {
    let topCourseData = await getTopCourseApi(setTopCourses);
    if (isLogin) {
      let baughtData = await myOrdersApi(setCourse, setLoading, setError);
      if (baughtData) {
        baughtCourseOnly = baughtData.filter((item) => {
          return item.data.course_type === "course";
        });
        setCourse(baughtCourseOnly);
      }
      let courseId = baughtCourseOnly.map((item) => {
        return String(item.data.course_id);
      });
      let newList = [];
      if (topCourseData) {
        for (const item of topCourseData) {
          let flag = courseId.includes(String(item._id));
          newList.push({ ...item, isBaught: flag });
        }
      }
      setTopCourses(newList);
    }
  }, []);
  return (
    <>
      {topCourses && topCourses.length !== 0 ? (
        <Container sx={{ maxWidth: "none !important" }}>
          <section>
            <Typography component="div" className="techvanto-whyus ">
              <Typography component="h2" className="techvanto-whyus-heading">
                Top Courses
              </Typography>
            </Typography>
            <section className="display-grid fr4 top-course-aria">
              {topCourses && topCourses.length !== 0
                ? topCourses.map((data, index) => {
                    return (
                      <CourseCard
                        key={index}
                        id={data._id}
                        title={data.course_name}
                        pic={data.thumbnail}
                        gradient={data.gradient}
                        price={data.price}
                        rating={data.avgRating}
                        couseData={data}
                        isBaught={data.isBaught ? data.isBaught : false}
                        noOfReviews={data.noOfReviews}
                        // review={data.reviews}
                      ></CourseCard>
                    );
                  })
                : ""}
            </section>
          </section>
          <div className="techvanto-all-course-button">
            <Link to="/all-courses/all" style={{ textDecoration: "none" }}>
              <button
                // variant="contained"
                className="btn-grad"
              >
                All Courses ►
              </button>
            </Link>
          </div>
          <br />
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default TopCourses;

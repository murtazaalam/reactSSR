import { Container, Typography } from "@mui/material";
import * as React from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./TopCourses.css";
import { Link } from "react-router-dom";
import image from "../../assets/Svgs/course.svg";
const TopCourses = () => {
  //const [topCourses, setTopCourses] = React.useState([]);
  const topCourses = [
    {
      id: 1,
      title: "Web Development",
      thumbnail: image,
      price: 758,
      gradient: "rgb(28 71 124), #9198e5",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 2,
      title: "Web Development",
      thumbnail: image,
      price: 758,

      gradient: "to right bottom, #ea395d, #eb6085, #e582a6, #dda0bf, #d6bcce",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 3,
      title: "Web Development",
      thumbnail: image,
      price: 758,
      gradient: "to right bottom, #1c7455, #35916a, #4faf7f, #69ce93, #85eea8",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 4,
      title: "Web Development",
      gradient: "to right bottom, #fb8854, #fe924c, #ff9d44, #ffa83b, #fcb433",
      thumbnail: image,
      price: 758,
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
  ];
  // React.useEffect(() => {
  //   TopCoursesApi(setTopCourses);
  // }, []);
  return (
    <>
      {topCourses && topCourses.length !== 0 ? (
        <Container>
          <section>
            <Typography component="div" className="techvanto-whyus ">
              <Typography component="h2" className="techvanto-whyus-heading">
                Top Courses:
              </Typography>
            </Typography>
            <section className="display-grid fr4 ">
              {topCourses && topCourses.length !== 0
                ? topCourses.map((data, index) => {
                    return (
                      <CourseCard
                        key={index}
                        id={data.id}
                        title={data.title}
                        pic={data.thumbnail}
                        gradient={data.gradient}
                        price={data.price}
                        discount={data.discount}
                        // review={data.reviews}
                      ></CourseCard>
                    );
                  })
                : ""}
            </section>
          </section>
          <div className="techvanto-all-course-button">
            <Link to="/all-courses" style={{ textDecoration: "none" }}>
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

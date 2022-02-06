import { Container, Typography, Button } from "@mui/material";
import * as React from "react";
import CourseCard from "./CourseCard/CourseCard";
import "./TopCourses.css";
import { Link } from "react-router-dom";

const TopCourses = () => {
  //const [topCourses, setTopCourses] = React.useState([]);
  const topCourses = [
    {
      id: 1,
      title: "Web Development",
      thumbnail:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      price: 758,
      gradient: "#e66465, #9198e5",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 2,
      title: "Web Development",
      thumbnail:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      price: 758,
      gradient: "0.25turn, #3f87a6, #ebf8e1, #f69d3c",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 3,
      title: "Web Development",
      thumbnail:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      price: 758,
      gradient: "to right top, #051937, #00435c, #256f72, #699a82, #b5c298",
      discount: 500,
      reviwes: ["excellent", "good course", "good course"],
    },
    {
      id: 4,
      title: "Web Development",
      gradient: "to right top, #051937, #00435c, #256f72, #699a82, #b5c298",
      thumbnail:
        "https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
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
              <Button
                variant="contained"
                className="techvanto-know-more-button btn-grad"
              >
                All Courses ►
              </Button>
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

import { CourseHeader, CourseBody } from "../../components";
import singleCourseApi from "../../apis/api/SingleCourse";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
const Courses = () => {
  const [course, setCourses] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (!course) {
      //id of course will be sent
      singleCourseApi(id, setCourses);
      if (course) localStorage.setItem("course", course.course_name);
    }
  }, [course, id]);
  return (
    <>
      {!course && <CircularProgress />}
      {course && (
        <>
          <CourseHeader title={course.course_name} category={course.category} />
          <CourseBody course={course} />
        </>
      )}
    </>
  );
};
export default Courses;

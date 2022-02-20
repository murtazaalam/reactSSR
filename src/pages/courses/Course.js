import { CourseHeader, CourseBody } from "../../components";
import singleCourseApi from "../../apis/api/SingleCourse";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader";
const Courses = () => {
  const [course, setCourses] = useState({});

  const { id } = useParams();
  console.log(id);
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  console.log(isEmpty(course));
  useEffect(() => {
    if (isEmpty(course)) {
      //id of course will be sent
      singleCourseApi(id, setCourses);
      if (course) localStorage.setItem("course", course.course_name);
    }
  }, [course, id]);
  return (
    <>
      {isEmpty(course) ? (
        <Loading />
      ) : (
        <>
          <CourseHeader
            title={course.course_name}
            category={course.category}
            subtitle="subtitle"
          />
          <CourseBody course={course} />
        </>
      )}
    </>
  );
};
export default Courses;

import { CourseHeader, CourseBody } from "../../components";
import singleCourseApi from "../../apis/api/SingleCourse";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader";
import { useSelector } from "react-redux";

const Courses = () => {
  const [courseData, setCourseData] = useState({});
  const { id } = useParams();
  let {course, isBaughtCourse } = useSelector((state) => state.CourseReducer)

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(async() => {
    if (isEmpty(courseData)) {
      singleCourseApi(id, setCourseData);
    }
  }, []);
  return (
    <>
      {isEmpty(courseData) ? (
        <Loading />
      ) : (
        <>
          <CourseHeader
            title={course ? course.course_name : courseData.course_name}
            category={course ? course.category : courseData.category}
            subtitle={course ? course.subtitle : courseData.subtitle}
            headerImageUrl={course ? course.headerImageUrl : courseData.headerImageUrl}
          />
          <CourseBody 
            course={course ? course : courseData}
            isBaughtCourse={isBaughtCourse}
          />
        </>
      )}
    </>
  );
};
export default Courses;
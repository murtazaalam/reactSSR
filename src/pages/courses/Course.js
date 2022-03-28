import { CourseHeader, CourseBody } from "../../components";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../redux/slices/course.slice";

const Courses = () => {
  const [courseData, setCourseData] = useState({});

  const [newCourse ,setCourse] = React.useState();
  const [loading, setLoading] = React.useState();
  const [error, setError] = React.useState();
  const dispatch = useDispatch();

  let { isLogin } = useSelector((state) => state.AuthReducer);
  const { id } = useParams();
  
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(async() => {
    if (isEmpty(courseData)) {
      dispatch(getCourse({id, setCourseData, setCourse, setLoading, setError, isLogin}))
    }
  }, [id]);

  let {course, isBaughtCourse } = useSelector((state) => state.CourseReducer)

  return (
    <>
      {isEmpty(courseData) ? (
        <Loading />
      ) : (
        <>
          <CourseHeader
            title={course && course.course_name}
            category={course && course.category}
            subtitle={course && course.subtitle}
            headerImageUrl={course && course.headerImageUrl}
          />
          <CourseBody 
            course={course }
            isBaughtCourse={isBaughtCourse}
          />
        </>
      )}
    </>
  );
};
export default Courses;

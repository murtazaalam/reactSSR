import { CourseHeader, CourseBody } from "../../components";
import singleCourseApi from "../../apis/api/SingleCourse";
import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loader";
import { useSelector } from "react-redux";
import myOrdersApi from "../../apis/api/MyOders";

const Courses = () => {
  const [courseData, setCourseData] = useState({});
  const [baughtCourses, setCourse] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [isPurchase, setIsBaughtCourse] = useState(false);
  const { id } = useParams();
  let {course, isBaughtCourse, discountTime} = useSelector((state) => state.CourseReducer)
  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  let baughtCourseOnly = [];
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  useEffect(async() => {
    if (isEmpty(courseData)) {
      singleCourseApi(id, setCourseData);
    }
    if(isLogin){
      let baughtData = await myOrdersApi(setCourse, setLoading, setError);
      if(baughtData){
        baughtCourseOnly = baughtData.filter((item) => {
          return item.data.course_type === "course"
        });
        isBaught(baughtCourseOnly)
      }
    }
  }, []);

  const isBaught = (baughtCourses) => {
    if(baughtCourses) {
      baughtCourses.forEach((item) => {
        if (item.data.course_id === course._id){} setIsBaughtCourse(true);
      });
    }
  };
  return (
    <>
      {console.log("time diffe red here",discountTime)}
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
            diffHour={discountTime}
          />
        </>
      )}
    </>
  );
};
export default Courses;
import routes from "../routes/Services.routes";
import axios from "axios";

export default async function singleCourseApi(course_id, setCourseData) {
  return await axios
    .get(routes.GetCourses + "/" + course_id)
    .then((res) => {
      setCourseData(res.data);
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        ////setApiError(true);
      } else if (error.request) {
      //setApiError(true);
          //setLoader(false);
      } else {
      //setApiError(true);
          //setLoader(false);
      }
    });
}
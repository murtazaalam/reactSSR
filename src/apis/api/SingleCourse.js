import routes from "../routes/Services.routes";
import axios from "axios";

export default function singleCourseApi(course_id, setCourseData) {
  axios
    .get(routes.GetCourses + "/" + course_id)
    .then((res) => {
      console.log("testing");
      setCourseData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

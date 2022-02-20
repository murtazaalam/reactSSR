import routes from "../routes/Services.routes";
import axios from "axios";

export default function getTopCourseApi(setTopCourses){
    axios.get(routes.TopCourse).then((res) => {
        setTopCourses(res.data);
    }).catch(err => {
        console.log(err);
    })
}
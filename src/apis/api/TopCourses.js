import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getTopCourseApi(setTopCourses){
    return await axios.get(routes.TopCourse).then((res) => {
        setTopCourses(res.data);
        return res.data;
    }).catch(error => {
        if (error.response) {
            ////setApiError(true);
        } else if (error.request) {
        //setApiError(true);
            //setLoader(false);
        } else {
        //setApiError(true);
            //setLoader(false);
        }
    })
}
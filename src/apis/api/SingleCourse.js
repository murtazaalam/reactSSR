import routes from '../routes/Services.routes';
import axios from 'axios';

export default function singleCourseApi(course_id, setCourseData){
    console.log(routes.GetCourses+"/"+course_id)
    axios.get(routes.GetCourses+"/"+course_id).then(res => {
        setCourseData(res.data);
    })
}
import routes from '../routes/Services.routes';

export default function singleCourseApi(course_id, setCourseData){
    fetch(routes.GetCourses+"/"+course_id).then(response => response.json()).then((data)=>{
        setCourseData(data);
    })
}
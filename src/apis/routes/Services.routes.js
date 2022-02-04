import endpoint from './Index.routes';

const routes =  {
    GetServiceTypes: endpoint+"/api/servicetype/get",
    UploadServiceTypes: endpoint+"/api/servicetype/post",
    AllServices: endpoint+"/api/service/all?id=",
    AllCourses: endpoint+"/api/service/all",
    GetService: endpoint+"/api/service/get",
    GetCurriculum: endpoint+"/api/Curriculum/get",
    GetTopCourses: endpoint+"/api/Courses/top",
    GetWebinars: endpoint+"/api/webinars/all",
    GetWebinar: endpoint+"/api/webinar/get?id=",
    GetWorkshops: endpoint+"/api/workshops/all",
    GetWorkshop: endpoint+"/api/workshop/get?id=",
    GetStudentSays: endpoint+"/api/student-says/get?name=",
    GetInstructor: endpoint+"/api/instructor/get",
    GetCategoryCourse : endpoint+"/api/service/all?category=",
    BookDemo : endpoint + "/api/contact-us/post",
    Login : endpoint + "/api/auth/login",
}
export default routes;
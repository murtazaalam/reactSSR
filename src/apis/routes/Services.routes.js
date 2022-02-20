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
    //new code from here
    GetCourses : "https://techvantonew.herokuapp.com/all-courses",
    GetEvents : "https://techvanto.herokuapp.com/techvanto-events",
    SignUp : "https://techvantonew.herokuapp.com/auth/register",
    Login : "https://techvantonew.herokuapp.com/auth/login",
    OrderTest : "http://localhost:4000/add-order",
    AddToCart : "https://techvantonew.herokuapp.com/add-to-cart",
    GetCartItems : "https://techvantonew.herokuapp.com/items-by-email",
    MyOrder : "https://techvantonew.herokuapp.com/my-orders",
    RemoveFromCart : "https://techvantonew.herokuapp.com/remove-from-cart/",
    AddOrder : "https://techvantonew.herokuapp.com/add-order",
    OrderVerify : "https://techvantonew.herokuapp.com/verify-order",
    InterviewQuestion : "https://techvantonew.herokuapp.com/interview-questions",
    Blogs : "https://techvantonew.herokuapp.com/blogs",
    SendQuery : "https://techvantonew.herokuapp.com/add-query"
}
export default routes;
import endpoint from "./Index.routes";

const routes = {
  GetCourses: endpoint + "all-courses",
  GetEvents: endpoint + "techvanto-events",
  SignUp: "http://ec2-18-206-58-123.compute-1.amazonaws.com:5000/auth/register",
  Login: endpoint + "auth/login",
  OrderTest: endpoint + "add-order",
  AddToCart: endpoint + "add-to-cart",
  GetCartItems: endpoint + "items-by-email",
  MyOrder: endpoint + "my-orders",
  RemoveFromCart: endpoint + "remove-from-cart/",
  AddOrder: endpoint + "add-order",
  OrderVerify: endpoint + "verify-order",
  InterviewQuestion: endpoint + "interview-questions",
  Blogs: endpoint + "blogs",
  SendQuery: endpoint + "add-query",
  TopCourse: endpoint + "top-courses",
};
export default routes;

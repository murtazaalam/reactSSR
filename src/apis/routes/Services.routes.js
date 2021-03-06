import endpoint from "./Index.routes";

const routes = {
  GetCourses: endpoint + "all-courses",
  GetEvents: endpoint + "all-events",
  OtpVerify: endpoint + "auth/verify-otp",
  SignUp: endpoint + "auth/register",
  Login: endpoint + "auth/login",
  resendOtp: endpoint + "auth/resend-otp",
  forgetPassword: endpoint + "auth/forgot",
  updatePassword: endpoint + "auth/update-password",
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
  AddReview: endpoint + "add-review",
  AddHiring: endpoint + "add-hiring",
  AddPlacement: endpoint + "add-placement-opportunity",
  AddEvent: endpoint + "event-registration",
  GetReferals: endpoint + "referals",
};
export default routes;

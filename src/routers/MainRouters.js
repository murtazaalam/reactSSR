//all routes here
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Events from "../pages/events/Events";
import Course from "../pages/courses/Course";
import AllCourses from "../pages/courses/All-courses/AllCourses";
import Blogs from "../pages/blogs/Blogs";
import Single from "../pages/blogs/singleBlog/Single";
import ContactUsForHiring from "../pages/contact-us/contactUsForHiring";
import NotFound from "../components/NotFound";
import EventDetail from "../pages/SingleEvent/UpcomingEvent.jsx";
import TestQuestion from "../pages/testQuestion/TestQuestion";
import ContactUsToGetHired from "../pages/contact-us/contactUsToGetHired";
import MyCart from "../pages/myCart/MyCart";
import MyCourses from "../pages/myCourses/MyCourses";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import TermsAndCondition from "../components/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy";
import PlacementPolicies from "../components/PlacementPolicies";
import ScrollToTop from "../components/ScrollToTop";
import PaymentPolicies from "../components/PaymentPolicies";
import AboutUs from "../pages/about-us/AboutUs.jsx";
import Signup from "../pages/Auth/auth";
import AuthSuccess from "../components/Login/Content/AuthSuccess";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import AllEvents from "../pages/events/AllEvents";
import UpcomingEvent from "../pages/SingleEvent/UpcomingEvent";

const MainRouters = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
        {/* doubt below route */}
        <Route
          path="/all-courses/:categoryRoute"
          element={<AllCourses></AllCourses>}
        ></Route>
        <Route path="/auth-user" element={<Signup />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/register-success" element={<AuthSuccess />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/courses/:id" element={<Course></Course>}></Route>
        <Route
          path="/interview-questions"
          element={<TestQuestion></TestQuestion>}
        ></Route>
        <Route path="/all-events" element={<AllEvents></AllEvents>}></Route>
        <Route path="/event/:id" element={<UpcomingEvent></UpcomingEvent>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs/:id" element={<Single />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/contact-us-for-hiring"
          element={<ContactUsForHiring />}
        ></Route>
        <Route
          path="/contact-us-to-get-hired"
          element={<ContactUsToGetHired />}
        ></Route>
        <Route path="/event/:id" element={<EventDetail></EventDetail>}></Route>

        <Route path="/my-cart" element={<MyCart />}></Route>
        <Route path="/my-courses" element={<MyCourses />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        ></Route>
        <Route path="/placement-policy" element={<PlacementPolicies />}></Route>
        <Route path="/payment-policy" element={<PaymentPolicies />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </ScrollToTop>
  );
};
export default MainRouters;

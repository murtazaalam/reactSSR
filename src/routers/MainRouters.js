//all routes here
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Events from "../pages/events/Events";
import Courses from "../pages/courses/Courses";
import AllCourses from "../pages/courses/All-courses/AllCourses";
import EventDetail from "../pages/SingleEvent/SingleEvent";
const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/all-courses" element={<AllCourses></AllCourses>}></Route>
      <Route path="/courses" element={<Courses></Courses>}></Route>
      <Route path="/events" element={<Events></Events>}></Route>
      <Route path="/event/:id" element={<EventDetail></EventDetail>}></Route>
    </Routes>
  );
};
export default MainRouters;

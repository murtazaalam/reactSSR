//all routes here
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Courses from "../pages/courses/Courses";
import AllCourses from "../pages/courses/All-courses/AllCourses";
const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/all-courses" element={<AllCourses></AllCourses>}></Route>

      <Route path="/courses" element={<Courses></Courses>}></Route>
    </Routes>
  );
};
export default MainRouters;

//all routes here
import { Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Events from '../pages/events/Events';
import Courses from '../pages/courses/Courses';
const MainRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/courses" element={<Courses></Courses>}></Route>
            <Route path="/events" element={<Events></Events>}></Route>
        </Routes>
    )
}
export default MainRouters

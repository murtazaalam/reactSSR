//all routes here
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
};
export default MainRouters;

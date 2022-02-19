import Sidebar from "../../../components/Blogs/SingleBlogPost/Sidebar";
import SinglePost from "../../../components/Blogs/SingleBlogPost/SinglePost";
import Banner from "../../../components/Generic/Banner/Banner";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <Banner
        backgroundImage="https://img.freepik.com/free-vector/composed-particles-swirling-abstract-graphics_456031-137.jpg?w=1800"
        heading=" Blog"
      />
      <SinglePost />
    </div>
  );
}

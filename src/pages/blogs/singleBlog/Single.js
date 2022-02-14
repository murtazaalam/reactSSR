import Sidebar from "../../../components/Blogs/SingleBlogPost/Sidebar";
import SinglePost from "../../../components/Blogs/SingleBlogPost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

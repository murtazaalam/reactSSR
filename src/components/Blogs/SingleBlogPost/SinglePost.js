import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./singlePost.css";

export default function SinglePost({blogDetails}) {
 
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <h1 className="singlePostTitle">
            {blogDetails && blogDetails.title}
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  {blogDetails && blogDetails.author_name}
                </Link>
              </b>
            </span>
            <span>{blogDetails && blogDetails.posted_on}</span>
          </div>
          <p className="singlePostDesc">
            {blogDetails && blogDetails.description}
          </p>
        </div>
        <Sidebar sideBarDetail={blogDetails} />
      </div>
    </>
  );
}

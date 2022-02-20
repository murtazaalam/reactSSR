import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/Blogs/SingleBlogPost/Sidebar";
import SinglePost from "../../../components/Blogs/SingleBlogPost/SinglePost";
import Banner from "../../../components/Generic/Banner/Banner";
import "./single.css";
import getSingleBlogApi from "../../../apis/api/SingleBlog";

export default function Single() {
  const [blogItem, setBlogItem] = useState();
  const params = useParams();
  useEffect(() => {
    getSingleBlogApi(params.id,setBlogItem)
  },[]);
  console.log("checking",blogItem);
  return (
    <div className="single">
      <Banner
        backgroundImage={blogItem && `${blogItem.blog_image}`}
        heading="Blog"
      />
      <SinglePost blogDetails={blogItem} />
    </div>
  );
}

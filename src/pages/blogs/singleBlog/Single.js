import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/Blogs/SingleBlogPost/Sidebar";
import SinglePost from "../../../components/Blogs/SingleBlogPost/SinglePost";
import Banner from "../../../components/Generic/Banner/Banner";
import "./single.css";
import getSingleBlogApi from "../../../apis/api/SingleBlog";
import Box from "@mui/material/Box";

export default function Single() {
  const [blogItem, setBlogItem] = useState();
  const params = useParams();
  useEffect(() => {
    getSingleBlogApi(params.id, setBlogItem);
  }, []);
  console.log("checking", blogItem);
  return (
    <div className="single">
      <Banner
        backgroundImage={blogItem && `${blogItem.blog_image}`}
        heading="Blog"
      />
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(${blogItem.blog_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="course-container">
          {/* <img src={BlogHead1} alt="" width="15" /> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">
                Blogs<div className="line"></div>
              </li>
              <li className="breadcrumb-item active">Blog</li>
            </ol>
          </nav>
          <h1 className="event-heading">Blogs</h1>
        </div>
      </Box>
      <SinglePost blogDetails={blogItem} />
    </div>
  );
}

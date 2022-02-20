import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../../components/Blogs/BlogHeader";
import BlogsContent from "../../components/Blogs/BlogsContent";
import getAllBlogsApi from "../../apis/api/Blogs";

function Blogs() {
  const [blogItems, setBlogs] = useState();
  useEffect(() => {
    getAllBlogsApi(setBlogs);
  },[])
  return (
    <div>
      <BlogHeader blogs={blogItems} />
      <BlogsContent blogs={blogItems} />
    </div>
  );
}

export default Blogs;

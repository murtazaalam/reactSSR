import React from "react";
import { Link } from "react-router-dom";
import BlogHeader from "../../components/Blogs/BlogHeader";
import BlogsContent from "../../components/Blogs/BlogsContent";

function Blogs() {
  return (
    <div>
      <BlogHeader />
      <BlogsContent />
    </div>
  );
}

export default Blogs;

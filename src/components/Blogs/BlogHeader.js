import React from "react";
import Box from "@mui/material/Box";
import BlogHead1 from "../../assets/Svgs/blogsHeader1.svg";
import BlogHead2 from "../../assets/Svgs/blogsHeader2.svg";

function BlogHeader() {
  return (
    <div>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/blog+page.jpg)`,
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
              <li className="breadcrumb-item active">Blogs</li>
            </ol>
          </nav>
          <h1 className="event-heading">Blogs</h1>
        </div>
      </Box>
    </div>
  );
}

export default BlogHeader;

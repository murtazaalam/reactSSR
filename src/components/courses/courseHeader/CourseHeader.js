import * as React from "react";
import { Link } from "react-router-dom";
import "./courseHeader.css";

const CourseHeader = (props) => {
  return (
    <>
      <section class="page-heading">
        <div class="course-container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/" class="home">
                  Home
                  <div class="line"></div>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/" class="home">
                  Courses
                  <div class="line"></div>
                </Link>
              </li>
              <li class="breadcrumb-item active">{props.category}</li>
            </ol>
          </nav>
          <div class="my-container">
            <div class="course-head">
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseHeader;

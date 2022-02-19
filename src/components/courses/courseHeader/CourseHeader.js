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
              <li class="breadcrumb-item active">
                Home
                <div class="line"></div>
              </li>
              <li class="breadcrumb-item active">
                Courses
                <div class="line"></div>
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

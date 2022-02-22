import * as React from "react";
import { Link } from "react-router-dom";
import "./courseHeader.css";

const CourseHeader = (props) => {
  return (
    <>
      <section className="page-heading">
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Home
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">
                Courses
                <div className="line"></div>
              </li>
              <li className="breadcrumb-item active">{props.category}</li>
            </ol>
          </nav>
          <div className="my-container">
            <div className="course-head">
              <h2>{props.title}</h2>
              <p style={{ color: "#8c9095" }}>{props.subtitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseHeader;

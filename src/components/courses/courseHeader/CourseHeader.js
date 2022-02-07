import * as React from "react";
import { Link } from "react-router-dom";
import './courseHeader.css';

const CourseHeader = () => {

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <section class="page-heading">
            <div class="container">
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
                        <li class="breadcrumb-item active">
                            For Schools
                        </li>
                    </ol>
                </nav>
                <div class="my-container">
                    <div class="course-head">
                        <h4>
                            <a href="#">Programming Languages</a>
                        </h4>
                        <h2>
                            Angular – The Complete Guide (2020 Edition)
                        </h2>
                        <div class="instructor-info">
                            <div class="instr-pic">
                                <img src="images/instructor_1.jpg" class="img-fluid" alt="instructor-image"/>
                            </div>
                            <div class="instr-name">
                                <span>Cikgu Siti Negro</span>
                            </div>
                            <div class="update-date">
                                <span>Last Update July 5, 2021</span>
                            </div>
                        </div>
                        <div class="total-enrolled">
                            <i class="fa fa-user"></i>
                            <span>3 already enrolled</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CourseHeader;
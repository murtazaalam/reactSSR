import * as React from "react";
import { Link } from "react-router-dom";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import Badge from '@material-ui/core/Badge';
import './courseHeader.css';

const CourseHeader = () => {

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
                        <li class="breadcrumb-item active">
                            For Schools
                        </li>
                    </ol>
                </nav>
                <div class="my-container">
                    <div class="course-head">
                        <h2>
                            Angular – The Complete Guide (2020 Edition)
                        </h2>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CourseHeader;
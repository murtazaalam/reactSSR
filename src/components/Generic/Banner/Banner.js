import React from "react";
import Box from "@mui/material/Box";
function Banner(props) {
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{
          background: `url(${props.backgroundImage})`,
          height: "410px",
          backgroundSize: "contain",
        }}
      >
        <div className="course-container">
          {props.breadcrumb && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html" className="home">
                    Home
                    <div className="line"></div>
                  </a>
                </li>
                <li className="breadcrumb-item active">{props.breadcrumb}</li>
              </ol>
            </nav>
          )}

          <h1 className="event-heading">{props.heading}</h1>
        </div>
      </Box>
    </>
  );
}

export default Banner;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import "./CourseCard.css";
import { Tooltip } from "@mui/material";

export default function CourseCard({
  id,
  title,
  pic,
  gradient,
  noOfReviews,
  price,
  discount,
  rating,
  fromMycourse,
}) {
  return (
    <Link to={`/courses/${id}`} style={{ textDecoration: "none" }}>
      <Card className="technovanto-course-card mobile-view-course-card">
        <div
          style={{
            background: `linear-gradient(${gradient})`,
          }}
          className="card-grad"
        >
          <CardMedia
            component="div"
            className="techvanto-all-course-image course-image-box"
          >
            <img src={`${pic}`} className="course-pic" alt="" />
          </CardMedia>
        </div>
        <CardContent
          style={{ borderBottom: "1px solid #d0d9df" }}
          className="card-title"
        >
          <Typography variant="body2" color="text.secondary">
            {title}{" "}
            {/* <span style={{ float: "right" }}>Rs.{price - discount}</span>
            </Chip> */}
          </Typography>

          <Chip
            label={`Rs${price - discount}`}
            style={{ float: "right", background: "#f1effe" }}
          />
        </CardContent>
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
          }}
        >
          <Tooltip title={`${rating} out of 5`}>
            <span>
              <Rating
                name="size-small"
                value={rating}
                precision={0.1}
                readOnly
                size={"small"}
                style={{ paddingTop: "0.5rem", left: 5 }}
              />
            </span>
          </Tooltip>{" "}
          <span className="technovanto-course-card-review">
            {"\u00a0\u00a0"}({noOfReviews} reviews)
          </span>
        </div>
      </Card>
    </Link>
  );
}

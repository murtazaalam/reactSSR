import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import "./CourseCard.css";

export default function CourseCard({
  id,
  title,
  pic,
  gradient,
  price,
  discount,
  review,
}) {
  const avarageRating =
    review && review.length
      ? review.reduce((total, next) => total + next.rating, 0) / review.length
      : 0;
  return (
    <Link to={`/service/${title}/${id}`}>
      <Card sx={{ maxWidth: 240 }} className="technovanto-course-card">
        <div
          style={{
            background: `linear-gradient(${gradient})`,
            height: "194px",
          }}
        >
          <CardMedia
            component="div"
            className="techvanto-all-course-image"
            width="100%"
            height="194"
            style={{ backgroundImage: `url("${pic}")`, height: "194px" }}
          />
        </div>
        <CardContent style={{ borderBottom: "1px solid #d0d9df" }}>
          <Typography variant="body2" color="text.secondary">
            {title}{" "}
            <Chip
              label={`Rs ${price - discount}`}
              style={{ float: "right", background: "#f1effe" }}
            />
            {/* <span style={{ float: "right" }}>Rs.{price - discount}</span>
            </Chip> */}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rating
            name="size-small"
            defaultValue={5}
            value={Math.round(avarageRating * 10) / 10}
            precision={0.1}
            readOnly
            size={"small"}
            style={{ padding: "0.5rem", left: 1 }}
          />
          <span className="technovanto-course-card-review">
            <b>{Math.round(avarageRating * 10) / 10}</b> (
            {review ? review.length : 0} reviews)
          </span>
        </div>
      </Card>
    </Link>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./BlogCard.css";
import Avatar from "@material-ui/core/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";

export default function BlogsCard({ classes }) {
  return (
    <Card className={classes.card}>
      <Link to="/blogs/abc123" style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              React useContext
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              Guy Clemons
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Feb 11,2022
            </Typography>
          </Box>
        </Box>
        <Box>
          <BookmarkIcon />
        </Box>
      </CardActions>
    </Card>
  );
}

import { Grid, Container } from "@mui/material";
import React from "react";
import BlogsCard from "./BlogsCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },

  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function BlogsContent() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogsCard classes={classes} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BlogsContent;

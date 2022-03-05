import React from "react";
import "./leftPanel.css";
import { Typography } from "@mui/material";
import { Box } from "@material-ui/core";
function leftPanel(props) {
  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: 24, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {props.heading}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        {props.formType === "hiring" && (
          <Typography
            variant="body2"
            sx={{ textAlign: "justify", fontSize: 18 }}
          >
            Techvanto's students master their fields, acquire up-to-date new
            skills and don’t just learn to complete projects but ace in a
            professional space. Ours is a market-leading talent hiring pool of
            individuals with optimum hard skills and soft skills that helps
            companies discover and hire budding talents.
          </Typography>
        )}
        {props.formType === "placement" && (
          <Typography
            variant="body2"
            sx={{ textAlign: "justify", fontSize: 18 }}
          >
            Techvanto Academy enables fresh graduates find their way into the
            corporate world by providing a thorough understanding of what a
            recruiter wants and how they can deliver results in an organization
            that seeks their experience and knowledge. We help you get a job of
            your choice in one of the most advanced placement training programns
            through personalized counselling and career guidance.
          </Typography>
        )}
      </Box>
    </>
  );
}

export default leftPanel;

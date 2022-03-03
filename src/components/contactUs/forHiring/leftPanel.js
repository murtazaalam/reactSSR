import React from "react";
import "./leftPanel.css";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
function leftPanel(props) {
  console.log(">>>",props.formType);
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.heading}
          </Typography>
          <Typography variant="h5" component="div">
            Overview
          </Typography>
          {props.formType === "hiring" &&
          <Typography variant="body2">
            Techvanto's students master their fields, acquire up-to-date new skills and don’t just learn to complete projects but 
            ace in a professional space. Ours is a market-leading talent hiring pool of individuals with optimum hard skills and soft 
            skills that helps companies discover and hire budding talents.
          </Typography>}
          {props.formType === "placement" &&
          <Typography variant="body2">
            Techvanto Academy enables fresh graduates find their way into the corporate world by providing a thorough understanding of 
            what a recruiter wants and how they can deliver results in an organization that seeks their experience and knowledge. 
            We help you get a job of your choice in one of the most advanced placement training programns through personalized 
            counselling and career guidance.
          </Typography>}
        </CardContent>
      </Card>
    </>
  );
}

export default leftPanel;

import { styled } from "@mui/material/styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const StyleListItem = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "transparent",
    border: "none",
  },
}));

export default function WhatAndWhyList(props) {
  const content = {
    what: [
      "We are an EdTech organisation that is sincerely committed to curating quality and affordable learning.",

      "We strive to push afar in pursuit of building resilient infrastructure and fostering innovation in online learning.",

      "We wish to contribute towards the skilled workforce of the country with the sincere implementation of productive employment goals.",
    ],
    why: [
      "We have an aim to inspire generations with endless opportunities fuelled by the desire to create an engaging learning experience.",

      "We are treading on a mission to fulfil educational and professional needs premised on the fact that education should not be a privilege.",

      "Furthering India’s educational goals to imbibe interdisciplinary and technical approaches to academic curricula, we are transforming education to deliver equity and excellence.",
    ],
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className="techvnato-what-and-why-list"
    >
      {content[props.text].map((txt, index) => (
        <StyleListItem key={index}>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={txt} />
        </StyleListItem>
      ))}
    </List>
  );
}

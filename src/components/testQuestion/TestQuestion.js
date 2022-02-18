import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import EventBackgroundImage from "../../assets/images/event_header_image.svg";

const TestQuestion = () => {
  const [events, setEventData] = useState();
  const [category, setCategory] = useState();
  const [questionList, setQuestionList] = useState("");

  useEffect(() => {
    if (category === "upcoming") {
      if (events == "") {
        //eventsApi(category, setEventData);
      }
    } else if (category === "past") {
      if (events == "") {
        //eventsApi(category, setEventData);
      }
    } else {
      if (!events) {
        //eventsApi(props.category, setEventData);
      }
    }
  }, [events]);

  let subject = [
    {
      id: "0",
      name: "C",
      description: "C Questions here",
    },
    {
      id: "1",
      name: "C++",
      description: "C++ Questions here",
    },
    {
      id: "2",
      name: "Java",
      description: "Java Questions here",
    },
    {
      id: "3",
      name: "Python",
      description: "Python Questions here",
    },
  ];
  const changeTab = (index) => {
    setQuestionList(index);
    console.log(questionList);
  };
  return (
    <>
      <Box
        component="section"
        className="page-heading"
        sx={{ background: `url(${EventBackgroundImage})` }}
      >
        <div className="course-container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html" className="home">
                  Home
                  <div className="line"></div>
                </a>
              </li>
              <li className="breadcrumb-item active">Test Questions</li>
            </ol>
          </nav>
          <h1 className="event-heading">Test Questions</h1>
        </div>
      </Box>
      <Box component="section" className="courses-area">
        <Box component="div" className="event-aria">
          <Typography component="h3">Test Questions</Typography>
        </Box>
        <Box
          component="div"
          sx={{ display: "flex", paddingTop: "20px" }}
          className="event-body"
        >
          <div className="col-lg-3 col-md-3 col-sm-6 col-12">
            <Box component="div" className="row" className="event-menu">
              {subject.map((item, index) => {
                return (
                  <Typography component="h6" onClick={() => changeTab(index)}>
                    {item.name}
                  </Typography>
                );
              })}
            </Box>

            <Box component="h6" className=""></Box>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 col-12">
            {subject.map((item, index) => {
              if (item.id == questionList) {
                console.log(">>", questionList, ">>", item.id);
                return <>{item.description}</>;
              }
            })}
            {/* <div className="pagination">
                            <Stack spacing={2}>
                                <Pagination count={5} color="success" />
                            </Stack>
                        </div> */}
          </div>
        </Box>
      </Box>
    </>
  );
};
export default TestQuestion;

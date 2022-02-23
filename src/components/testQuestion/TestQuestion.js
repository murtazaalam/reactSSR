import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Loader from "../Loader";
import EventBackgroundImage from "../../assets/images/event_header_image.svg";
import "./testQuestion.css";
import getInterviewQuestionsApi from "../../apis/api/InterviewQuestion";

const TestQuestion = () => {
  const [questionList, setQuestionList] = useState("");
  const [subject, setSubject] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInterviewQuestionsApi(setSubject, setLoading);
  }, []);

  const changeTab = (id) => {
    console.log(id);
    setQuestionList(id);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box
            component="section"
            className="page-heading"
            sx={{
              background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Interview+questions.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="course-container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active">
                    Home
                    <div className="line"></div>
                  </li>
                  <li className="breadcrumb-item active">
                    Interview Questions
                  </li>
                </ol>
              </nav>
              <h1 className="event-heading">Interview Questions</h1>
            </div>
          </Box>
          <Box component="section" className="courses-area">
            <Box component="div" className="event-aria">
              <Typography component="h3">Interview Questions</Typography>
            </Box>
            <Box
              component="div"
              sx={{ display: "flex", paddingTop: "20px" }}
              className="event-body"
            >
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <Box component="div" className="row event-menu">
                  {subject &&
                    subject.map((item, index) => {
                      return (
                        <Typography
                          component="h6"
                          data-index={index}
                          onClick={() => changeTab(item._id)}
                        >
                          {item.name}
                        </Typography>
                      );
                    })}
                </Box>

                <Box component="h6" className=""></Box>
              </div>
              <div className="questions-wrap col-lg-9 col-md-9 col-sm-6 col-12">
                {subject &&
                  subject.map((item, index) => {
                    if (!questionList) {
                      if (index === 0) {
                        return (
                          <>
                            {item.list.map((val, i) => {
                              return (
                                <>
                                  <h5>
                                    <span>Ques {i + 1} </span>
                                    {val.question}
                                  </h5>
                                  <p className="interview-answer">
                                    {val.answer}
                                  </p>
                                </>
                              );
                            })}
                          </>
                        );
                      }
                    }
                    if (item._id === questionList) {
                      return (
                        <>
                          {item.list.map((val, i) => {
                            return (
                              <>
                                <h5>
                                  <span>Ques {i + 1} </span>
                                  {val.question}
                                </h5>
                                <p className="interview-answer">{val.answer}</p>
                              </>
                            );
                          })}
                        </>
                      );
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
      )}
    </>
  );
};
export default TestQuestion;

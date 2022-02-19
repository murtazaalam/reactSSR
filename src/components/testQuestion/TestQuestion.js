import React from "react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
// import ViewComfyIcon from "@mui/icons-material/ViewComfy";
// import TableRowsIcon from "@mui/icons-material/TableRows";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import EventBackgroundImage from "../../assets/images/event_header_image.svg";
import "./testQuestion.css";
const TestQuestion = () => {
  const [questionList, setQuestionList] = useState("");

  let subject = [
    {
      id: "0",
      name: "C",
      list: [
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
      ],
    },
    {
      id: "1",
      name: "C++",
      list: [
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
      ],
    },
    {
      id: "2",
      name: "Java",
      list: [
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
      ],
    },
    {
      id: "3",
      name: "Python",
      list: [
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
        {
          question: "What is a built-in function in C?",
          answer:
            "Built-function is also known as library functions that are provided by the system to make the life of a developer easy by assisting them to do certain commonly used predefined tasks. For example, if you need to print output or your program into the terminal, we use printf() in C.",
        },
      ],
    },
  ];
  const changeTab = (e) => {
    setQuestionList(e.target.getAttribute("data-index"));
    console.log(e.target.getAttribute("data-index"));
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
                <p className="home">
                  Home
                  <div className="line"></div>
                </p>
              </li>
              <li className="breadcrumb-item active">Interview Questions</li>
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
            <Box component="div" className="row" className="event-menu">
              {subject.map((item, index) => {
                return (
                  <Typography
                    component="h6"
                    data-index={index}
                    onClick={changeTab}
                  >
                    {item.name}
                  </Typography>
                );
              })}
            </Box>

            <Box component="h6" className=""></Box>
          </div>
          <div className="questions-wrap col-lg-9 col-md-9 col-sm-6 col-12">
            {subject.map((item, index) => {
              if (item.id === questionList) {
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
  );
};
export default TestQuestion;

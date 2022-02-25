import React, { useState, useEffect } from "react";
import SearchBar from "../../../components/CoursesComponents/SearchBar/SearchBar";
import FilterPanel from "../../../components/CoursesComponents/FilterPanel/FilterPanel.js";
import Box from "@mui/material/Box";
import "./All-courses.css";
import { useRecoilState } from "recoil";
import { courseList } from "../../../recoil/store";
import CourseCard from "../../../components/TopCourses/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loader";
import AllCourseApi from "../../../apis/api/AllCourse";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function AllCourses() {
  const { categoryRoute } = useParams();

  const [selectedCategory, setSelectedCategory] = useState([
    { id: 1, checked: false, label: "School" },
    { id: 2, checked: false, label: "College" },
    { id: 3, checked: false, label: "Intermediate" },
    { id: 4, checked: false, label: "All" },
  ]);
  const [category, setCategory] = useState("");
  const [list, setList] = useRecoilState(courseList);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [, setCourseByCategory] = useState();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeChecked = (id) => {
    console.log(id);
    setCategory(selectedCategory[id - 1].label);
    const categoryStateList = selectedCategory;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked }
        : { ...item, checked: false }
    );
    setSelectedCategory(changeCheckedCategories);
    console.log(selectedCategory[id - 1].label);
  };
  console.log(selectedCategory);

  const fetchdata = () => {
    AllCourseApi(setList, setCourseByCategory, setLoading);
    const categoryStateList = selectedCategory;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.label.toLowerCase().includes(categoryRoute.toLowerCase())
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );
    setSelectedCategory(changeCheckedCategories);
    setLoading(false);
  };
  const data = list
    ?.filter((val) => {
      if (searchInput === "") {
        return val;
      } else if (
        val.course_name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return val;
      }
    })

    ?.filter((val) => {
      if (categoryRoute === "all") return val;
      else if (category === "All") return val;
      else if (
        val.category.toLowerCase().includes(categoryRoute.toLowerCase()) ||
        val.category === category
      ) {
        return val;
      }
    })

    .map((data) => {
      return category === data.category ||
        category === "" ||
        category === "All" ? (
        <>
          <CourseCard
            id={data._id}
            title={data.course_name}
            pic={data.thumbnail}
            gradient={data.gradient}
            price={data.price}
            discount={data.discount}
            rating={3}
            // review={data.reviews}
          ></CourseCard>
        </>
      ) : null;
    });
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* Header */}
      <Box
        className="page-heading"
        sx={{
          background: `url(${"https://tv-academy-assets.s3.eu-west-2.amazonaws.com/all+courses.jpg"})`,
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
              <li className="breadcrumb-item active">All Courses</li>
            </ol>
          </nav>
          <h1 className="event-heading">All Courses</h1>
        </div>
      </Box>
      <div className="allCourses">
        {/* SearchBar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />

        <div className="course-panelList-wrap">
          <div className="course-panel-wrap">
            {/* Side Panels */}
            {window.matchMedia("(max-width: 700px)").matches ? (
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Choose Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FilterPanel
                    category={selectedCategory}
                    changeChecked={handleChangeChecked}
                  />
                </AccordionDetails>
              </Accordion>
            ) : (
              <>
                <p className="label">Category</p>
                <FilterPanel
                  category={selectedCategory}
                  changeChecked={handleChangeChecked}
                />
              </>
            )}
          </div>

          <div className="course-list-wrap">
            {/* List and Empty View */}

            <div className="list-wrap">{!data ? <Loading /> : <>{data}</>}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;

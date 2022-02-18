/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import SearchBar from "../../../components/CoursesComponents/SearchBar/SearchBar";
import FilterPanel from "../../../components/CoursesComponents/FilterPanel/FilterPanel.js";
import List from "../../../components/CoursesComponents/List/List";
//import EmptyView from "../../../components/EmptyView/EmptyView";
import { dataList } from "../../../data/constants";
import Box from "@mui/material/Box";
import EventBackgroundImage from "../../../assets/images/event_header_image.svg";
import "./All-courses.css";
import { useRecoilState } from "recoil";
import { courseList } from "../../../recoil/store";
import CourseCard from "../../../components/TopCourses/CourseCard/CourseCard";
import { Link, useParams } from "react-router-dom";

function AllCourses() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const { id } = useParams();

  const [selectedCategory, setSelectedCategory] = useState([
    { id: 1, checked: false, label: "For School" },
    { id: 2, checked: false, label: "For College" },
    { id: 3, checked: false, label: "For Intermediate" },
    { id: 4, checked: false, label: "All" },
  ]);
  const [category, setCategory] = useState("");
  const [list, setList] = useRecoilState(courseList);
  // const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  //const [loading, setLoading] = useState(false);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    setCategory(selectedCategory[id - 1].label);
    const categoryStateList = selectedCategory;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedCategory(changeCheckedCategories);
    console.log(selectedCategory[id - 1].label);
  };
  console.log(selectedCategory);

  const fetchdata = async () => {
    //setLoading(true);
    let forSchool = await JSON.parse(localStorage.getItem("forSchool"));
    let forCollege = await JSON.parse(localStorage.getItem("forCollege"));
    let forIntermediate = await JSON.parse(
      localStorage.getItem("forIntermediate")
    );
    setList([...forSchool, ...forCollege, ...forIntermediate]);
    //  applyFilters();
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
      if (selectedRating === null) {
        return val;
      } else if (val.rating === selectedRating) {
        return val;
      }
    })

    .map((data) => {
      return (category || id) === data.category ||
        category === "" ||
        category === "All" ? (
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
      ) : null;
    });

  console.log(data);
  // const applyFilters = () => {
  //   let updatedList = list;

  //   //   // Rating Filter
  //   //   if (selectedRating) {
  //   //     updatedList = updatedList.filter(
  //   //       (item) => parseInt(item.rating) === parseInt(selectedRating)
  //   //     );
  //   //   }

  //   // Category Filter
  //   const categoryChecked = selectedCategory
  //     .filter((item) => item.checked)
  //     .map((item) => item.label.toLowerCase());

  //   if (categoryChecked.length) {
  //     updatedList = updatedList.filter((item) =>
  //       categoryChecked.includes(item.category)
  //     );
  //   }

  // // Search Filter
  // if (searchInput) {
  //   updatedList = updatedList.filter(
  //     (item) =>
  //       item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
  //       -1
  //   );
  // }

  //   // // Price Filter
  //   // const minPrice = selectedPrice[0];
  //   // const maxPrice = selectedPrice[1];

  //   // updatedList = updatedList.filter(
  //   //   (item) => item.price >= minPrice && item.price <= maxPrice
  //   // );

  //   setList(updatedList);

  //   //   updatedList.length ? setResultsFound(true) : setResultsFound(false);
  // };
  // useEffect(() => {
  //   applyFilters();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedCategory]);

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {/* Header */}
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
            <FilterPanel
              selectedRating={selectedRating}
              selectedPrice={selectedPrice}
              selectRating={handleSelectRating}
              category={selectedCategory}
              changeChecked={handleChangeChecked}
            />
          </div>
          <div className="course-list-wrap">
            {/* List and Empty View */}
            <div className="list-wrap">
              {console.log("rendering")}
              {data}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;

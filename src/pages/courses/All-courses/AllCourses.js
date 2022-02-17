import React, { useState, useEffect } from "react";
import SearchBar from "../../../components/CoursesComponents/SearchBar/SearchBar";
import FilterPanel from "../../../components/CoursesComponents/FilterPanel/FilterPanel.js";
import List from "../../../components/CoursesComponents/List/List";
//import EmptyView from "../../../components/EmptyView/EmptyView";
import { dataList } from "../../../data/constants";
import Box from "@mui/material/Box";
import EventBackgroundImage from "../../../assets/images/event_header_image.svg";
import "./All-courses.css";

function AllCourses() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [selectedCategory, setSelectedCategory] = useState([
    { id: 1, checked: false, label: "For School" },
    { id: 2, checked: false, label: "For College" },
    { id: 3, checked: false, label: "For Intermediate" },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const categoryStateList = selectedCategory;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSelectedCategory(changeCheckedCategories);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };
  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    const categoryChecked = selectedCategory
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRating, selectedCategory, searchInput, selectedPrice]);

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
              changePrice={handleChangePrice}
            />
          </div>
          <div className="course-list-wrap">
            {/* List and Empty View */}
            <h2> List</h2>
            {resultsFound ? <List list={list} /> : "<EmptyView />"}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;

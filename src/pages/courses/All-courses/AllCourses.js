import React, { useState, useEffect } from "react";
import SearchBar from "../../../components/CoursesComponents/SearchBar/SearchBar";
import FilterPanel from "../../../components/CoursesComponents/FilterPanel/FilterPanel.js";
import Box from "@mui/material/Box";
import EventBackgroundImage from "../../../assets/images/event_header_image.svg";
import "./All-courses.css";
import { useRecoilState } from "recoil";
import { courseList } from "../../../recoil/store";
import CourseCard from "../../../components/TopCourses/CourseCard/CourseCard";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loader";

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
  console.log(category);

  const handleChangeChecked = (id) => {
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

  const fetchdata = async () => {
    let forSchool = await JSON.parse(localStorage.getItem("forSchool"));
    let forCollege = await JSON.parse(localStorage.getItem("forCollege"));
    let forIntermediate = await JSON.parse(
      localStorage.getItem("forIntermediate")
    );
    setList([...forSchool, ...forCollege, ...forIntermediate]);
    const categoryStateList = selectedCategory;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.label.toLowerCase().includes(categoryRoute.toLowerCase())
        ? { ...item, checked: !item.checked }
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

  console.log(data);
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
            <FilterPanel
              category={selectedCategory}
              changeChecked={handleChangeChecked}
            />
          </div>
          {loading ? (
            <Loading />
          ) : (
            <div className="course-list-wrap">
              {/* List and Empty View */}

              <div className="list-wrap">
                {/* {data ? data : <h1>sd</h1>} */}
                {data ? data : console.log("sdsd")}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllCourses;

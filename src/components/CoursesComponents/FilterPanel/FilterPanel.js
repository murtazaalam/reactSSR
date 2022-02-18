import { Category } from "@material-ui/icons";
import React from "react";
import { ratingList } from "../../../data/constants/index";
import CheckboxProton from "../../Generic/CheckboxProton/CheckboxProton";
import FilterListToggle from "../../Generic/FilterListToggle/FilterListToggle";
// import SliderProton from "../../Generic/SliderProton/SliderProton";
import "./FilterPanel.css";

const FilterPanel = ({
  selectedRating,
  // selectedPrice,
  selectRating,
  category,
  changeChecked,
  // changePrice,
}) => {
  console.log(ratingList);
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">
          Category <Category />
        </p>

        {category.map((category) => (
          <CheckboxProton
            key={category.id}
            category={category}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Price Range */}
      {/* <div className="input-group">
      <p className="label-range">Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div> */}

      {/* Rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;

import React from "react";
import { Category } from "@material-ui/icons";
import { ratingList } from "../../../data/constants/index";
import CheckboxProton from "../../Generic/CheckboxProton/CheckboxProton";
import "./FilterPanel.css";

const FilterPanel = ({ category, changeChecked }) => {
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
    </div>
  );
};

export default FilterPanel;

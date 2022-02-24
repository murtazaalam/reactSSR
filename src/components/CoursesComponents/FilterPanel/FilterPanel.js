import React from "react";
import { Category } from "@material-ui/icons";
import { ratingList } from "../../../data/constants/index";
import CheckboxProton from "../../Generic/CheckboxProton/CheckboxProton";

import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import "./FilterPanel.css";

const FilterPanel = ({ category, changeChecked }) => {
  return (
    <div>
      {/* Category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FormControl id="demo-radio-buttons-group-label">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {category.map((category) => (
              <CheckboxProton
                key={category.id}
                category={category}
                changeChecked={changeChecked}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterPanel;

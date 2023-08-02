import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./dropDown.scss";
import { useDispatch } from "react-redux";
import { showAll, showCompleted, showPending } from "../features/Tasks";

const Dropdown = ({ options }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.value === "Completed") {
      dispatch(showCompleted());
    } else if (e.target.value === "Pending") {
      dispatch(showPending());
    } else {
      dispatch(showAll());
    }
  };

  return (
    <div className="dropdown">
      <select onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

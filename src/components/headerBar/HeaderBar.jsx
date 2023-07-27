import React, { useState } from "react";
import Button from "../Button";
import Popup from "../popup/Popup";
import Dropdown from "../dropDown/DropDown";
import "./HeaderBar.scss";
import { useSelector } from "react-redux";
import { showModal } from "../features/Tasks";

const HeaderBar = () => {
  const state = useSelector((state) => state.task);
  const handleDropdownSelect = (selectedOption) => {};

  const options = ["Completed", "Pending"];
  return (
    <div className="headerBar">
      <Button name="Add New Task" style={"primary"} action={showModal} />
      {state.popup && <Popup />}
      <Dropdown options={options} onSelect={handleDropdownSelect} />
    </div>
  );
};

export default HeaderBar;

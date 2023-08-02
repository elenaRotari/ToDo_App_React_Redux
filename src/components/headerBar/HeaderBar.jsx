import React, { useState } from "react";
import Button from "../Button";
import Popup from "../popup/Popup";
import Dropdown from "../dropDown/DropDown";
import "./HeaderBar.scss";
import { useSelector } from "react-redux";
import { showModal } from "../features/Tasks";

const HeaderBar = () => {
  const state = useSelector((state) => state.task);

  const options = ["All", "Completed", "Pending"];
  return (
    <div className="headerBar">
      <Button name="Add New Task" style={"primary"} action={showModal} />
      {state.popup && <Popup />}
      <Dropdown options={options} />
    </div>
  );
};

export default HeaderBar;

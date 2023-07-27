import React, { useState } from "react";
import Button from "../Button";
import Popup from "../popup/Popup";
import Dropdown from "../dropDown/DropDown";
import "./HeaderBar.scss";

const HeaderBar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleDropdownSelect = (selectedOption) => {};

  const options = ["Completed", "Pending"];
  return (
    <div className="headerBar">
      <Button name="Add New Task" style={"primary"} onClick={setShowModal} />
      {showModal && <Popup />}
      <Dropdown options={options} onSelect={handleDropdownSelect} />
    </div>
  );
};

export default HeaderBar;

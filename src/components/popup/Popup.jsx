import React, { useRef } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, hideModal } from "../features/Tasks.js";
import "./Popup.scss";

const Popup = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(addTask({ content: ref.current.value }));
  };

  return (
    <div className="popup">
      <h3>Add new Task</h3>

      <input type="text" placeholder="type here" ref={ref} />
      <Button
        name="Add"
        style={"primary"}
        action={() => addTask({ content: ref.current.value })}
      />

      <Button name="Cancel" style={"cancel"} action={hideModal} />
    </div>
  );
};

export default Popup;

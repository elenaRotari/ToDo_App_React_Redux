import React, { useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import "./Popup.scss";

const Popup = () => {
  const task = useSelector((state) => state.task);
  console.log(task);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <h3>Add new Task</h3>
      <form className="form">
        <input
          type="text"
          name="content"
          placeholder="type here"
          value={task.content}
          onChange={(e) =>
            dispatch({
              type: "ADD_TASK",
              payload: { ...task, [e.target.name]: e.target.value },
            })
          }
        />
        <Button
          name="Add"
          style={"primary"}
          type={"submit"}
          onClick={handleSubmit}
        />
        <Button name="Edit" style={"secondary"} />
        <Button name="Cancel" style={"cancel"} />
      </form>
    </div>
  );
};

export default Popup;

import React, { useState } from "react";
import Button from "../Button";
import { removeTask, editTask, setEdit } from "../features/Tasks.js";
import { useSelector } from "react-redux";

const MyTask = ({ task }) => {
  const state = useSelector((state) => state.task);
  const [value, setValue] = useState(task.content);
  return (
    <div>
      {!state.isEditable ? (
        <p>{task.content}</p>
      ) : (
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      )}
      <Button
        style="secondary"
        name="edit"
        action={() =>
          !state.isEditable
            ? setEdit()
            : editTask({ id: task.id, content: value })
        }
      />
      <Button
        style="cancel"
        name="remove"
        action={() => removeTask({ id: task.id })}
      />
    </div>
  );
};

export default MyTask;

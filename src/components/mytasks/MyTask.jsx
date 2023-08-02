import React, { useState } from "react";
import Button from "../Button";
import {
  removeTask,
  editTask,
  setEdit,
  cancel,
  setChecked,
} from "../features/Tasks.js";
import { useDispatch, useSelector } from "react-redux";
import "./MyTask.scss";

const MyTask = ({ task }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.task);
  const [value, setValue] = useState({
    content: task.content,
    date: task.date,
    done: task.done,
  });
  console.log(value.done);
  return (
    <div className="task">
      {!state.isEditable ? (
        <div className="myTask">
          <input
            value={value.done}
            type="checkbox"
            checked={value.done}
            onChange={(event) => {
              setValue((prev) => ({ ...prev, done: event.target.checked }));
              dispatch(setChecked({ id: task.id, done: event.target.checked }));
            }}
          />
          <p>{task.date}</p>
          <p>{task.content}</p>
        </div>
      ) : (
        <div>
          <input
            value={value.content}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, content: e.target.value }));
            }}
          />
          <input
            type="date"
            value={value.date}
            onChange={(e) => {
              setValue((prev) => ({ ...prev, date: e.target.value }));
            }}
          />
        </div>
      )}

      <div className="btn">
        <Button
          style="secondary"
          name="edit"
          action={() =>
            !state.isEditable
              ? setEdit()
              : editTask({
                  id: task.id,
                  content: value.content,
                  date: value.date,
                })
          }
        />
        <Button
          style="cancel"
          name="remove"
          action={() => removeTask({ id: task.id })}
        />
        <Button style="cancel" name="cancel" action={() => cancel()} />
      </div>
    </div>
  );
};

export default MyTask;

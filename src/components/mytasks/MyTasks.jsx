import React, { useState } from "react";
import { useSelector } from "react-redux";

import MyTask from "./MyTask";

const MyTasks = () => {
  const task = useSelector((state) => state.task);
  console.log(task.filtred);

  return (
    <div>
      {task.filtred.map((task) => {
        return <MyTask key={task.id} task={task} />;
      })}
    </div>
  );
};

export default MyTasks;

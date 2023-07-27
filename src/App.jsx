import { useLoaderData } from "react-router-dom";
import "./App.scss";

import React from "react";

function App() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>ToDo</h1>
    </div>
  );
}

export default App;

export const loader = async () => {
  //get users from api
  const user = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await user.json();
  //get comments from api
  const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await comment.json();
  return { users, comments };
};

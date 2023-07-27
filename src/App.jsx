// import { useLoaderData } from "react-router-dom";
import "./App.scss";

import React from "react";
import Header from "./components/header/Header";
import MyTasks from "./components/mytasks/MyTasks";

function App() {
  return (
    <div className="App">
      <Header />
      <MyTasks />
    </div>
  );
}

export default App;

// export const loader = async () => {
//   //get users from api
//   const user = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await user.json();
//   //get comments from api
//   const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
//   const comments = await comment.json();
//   return { users, comments };
// };

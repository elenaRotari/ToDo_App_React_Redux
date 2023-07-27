import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/features/Tasks.jsx";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;

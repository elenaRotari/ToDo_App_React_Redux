import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/features/Tasks.js";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;

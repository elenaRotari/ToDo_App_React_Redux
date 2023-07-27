import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [],
  popup: false,
  isEditable: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: uuidv4(),
        date: new Date().toISOString().slice(0, 10),
        done: false,
      });
      state.popup = false;
    },

    showModal: (state) => {
      state.popup = true;
    },

    hideModal: (state) => {
      state.popup = false;
    },

    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.isEditable = false;
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },

    setEdit: (state) => {
      state.isEditable = true;
    },
  },
});

export const { addTask, showModal, hideModal, editTask, removeTask, setEdit } =
  taskSlice.actions;

export default taskSlice.reducer;
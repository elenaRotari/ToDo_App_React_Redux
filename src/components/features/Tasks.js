import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [],
  popup: false,
  isEditable: false,
  filtred: [],
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
      state.filtred = state.tasks;
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
      state.filtred = state.tasks;
    },
    cancel: (state) => {
      state.isEditable = false;
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      state.filtred = state.tasks;
    },

    setEdit: (state) => {
      state.isEditable = true;
    },

    showAll: (state, action) => {
      state.filtred = state.tasks;
    },
    showCompleted: (state, action) => {
      state.filtred = state.tasks.filter((task) => task.done === true);
    },
    showPending: (state, action) => {
      state.filtred = state.tasks.filter((task) => task.done === false);
    },
  },
});

export const {
  addTask,
  showModal,
  hideModal,
  editTask,
  removeTask,
  setEdit,
  showAll,
  showCompleted,
  showPending,
  cancel,
} = taskSlice.actions;

export default taskSlice.reducer;

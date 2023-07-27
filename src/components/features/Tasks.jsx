import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    date: new Date().toISOString().slice(0, 10),
    content: "",
    done: false,
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.task.content = action.payload;
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

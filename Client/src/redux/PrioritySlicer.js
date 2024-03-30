import { createSlice } from "@reduxjs/toolkit";
const inputs = "";
const taskPriority = createSlice({
  name: "TASKPRIORITY",
  initialState: inputs,
  reducers: {
    setPriority: (state, action) => {
      return action.payload;
    },
  },
});

export const taskPriorityReducer = taskPriority.reducer;
export const { setPriority } = taskPriority.actions;

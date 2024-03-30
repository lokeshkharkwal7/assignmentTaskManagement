import { createSlice } from "@reduxjs/toolkit";
const inputs = "Everything";
const taskCategory = createSlice({
  name: "TASKCATEGORY",
  initialState: inputs,
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
    
  },
});

export const taskCategoryReducer = taskCategory.reducer;
export const { setCategory } = taskCategory.actions;

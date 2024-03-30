import { configureStore } from "@reduxjs/toolkit";
import { timeManagementReducer } from "./slicers";
import { taskCategoryReducer } from "./categorySlicer";
import { taskPriorityReducer } from "./PrioritySlicer";

export const store = configureStore({
  // all the reducer are
  reducer: {
    TASKMANAGEMENT: timeManagementReducer,
    TASKCATEGORY: taskCategoryReducer,
    TASKPRIORITY: taskPriorityReducer,
  },
});

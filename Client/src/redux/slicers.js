import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// function for making the API Call
const host = "https://assignment-task-management-backend.vercel.app";
export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const url = `${host}/fetchTask`;

  try {
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
    });
    const output = await response.json();
    if (output.status === true) {
      // console.log("Data is fetched Successfull");
      // console.log(output.data);

      return output.data;
    } else {
      console.error(output.msg);
    }
  } catch (error) {
    console.log("Error Occured :", error);
  }
});

let data = {
  loading: false,
  error: false,
  data: [],
  searchedData: [],
};
export const timeManagementSlicer = createSlice({
  name: "TASKMANAGEMENT",
  initialState: data,
  reducers: {
    addToTask(state, action) {
      const newItem = {
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
        category: action.payload.category,
        completed: action.payload.completed,
      };

      //   code for sortinng the state
      const mapPriority = {
        Low: 2,
        Medium: 1,
        High: 0,
      };

      return {
        ...state,
        data: [...state.data, newItem].sort(
          (a, b) => mapPriority[a.priority] - mapPriority[b.priority]
        ),
      };
    },
    removeTask(state, action) {
      const dataAfterRemoved = state.data.filter((pObj) => {
        return pObj._id !== action.payload; //RETURNING A NEW DATA FROM FILTER WHICH IS NOT EQUAL TO THE PARAMETER THAT IS PASSED TO THE FUNCTION
      });
      return { ...state, data: dataAfterRemoved };
    },
    taskUpdate(state, action) {
      const { title, formData } = action.payload;
      const updatedTasks = state.data.map((task) => {
        return task.title === title ? { ...task, ...formData } : task;
      });
      console.log(updatedTasks); // This will now log the updated array
      return { ...state, data: updatedTasks };
    },

    storeSearchResult(state, action) {
      return { ...state, searchedData: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      //   code for sortinng the state
      const mapPriority = {
        Low: 2,
        Medium: 1,
        High: 0,
      };
      state.data.sort(
        (a, b) => mapPriority[a.priority] - mapPriority[b.priority]
      );
    });
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      (state.loading = false)((state.data = action.payload));
    });
  },
});

// exporting all reducers
export const timeManagementReducer = timeManagementSlicer.reducer;

// exporting all actions to be used in the components
export const { addToTask, removeTask, taskUpdate, storeSearchResult } =
  timeManagementSlicer.actions;

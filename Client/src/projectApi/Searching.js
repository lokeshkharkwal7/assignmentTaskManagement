import { storeSearchResult } from "../redux/slicers";

export const searchTaskDb = async (dispatch, content) => {
  const url = "https://assignment-task-management-backend.vercel.app";
  const response = await fetch(`${url}/search/${content}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
  });
  const output = await response.json();
  if (output.status === true) {
    console.log("About to get result");
    dispatch(storeSearchResult(output.data));
    console.log("searched data :", output.data);
  } else {
    console.log("Unable to delete data to the Server");
  }
};

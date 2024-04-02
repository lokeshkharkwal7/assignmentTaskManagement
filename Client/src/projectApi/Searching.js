import { storeSearchResult } from "../redux/slicers";

export const searchTaskDb = async (dispatch, content) => {
  // making the redux state empty 
  dispatch(storeSearchResult([]))
  const url = "https://assignment-task-management-backend.vercel.app";
  const response = await fetch(`${url}/search/${content}`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
  });
  const output = await response.json();

  if (output.status===false) {
    dispatch(storeSearchResult(['No Data']));
    
  } else {
    dispatch(storeSearchResult(output.data));
    
  }
};

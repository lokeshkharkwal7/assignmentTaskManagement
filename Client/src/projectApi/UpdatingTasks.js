export const updateTaskDb = async (id, taskData) => {
  try {
    console.log("The Data from the parameters is : ", taskData, "Id is : ", id);
    const url = "https://assignment-task-management-backend.vercel.app";
    const response = await fetch(`${url}/updateTask/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(taskData), // body data type must match "Content-Type" header
    });
    const updateResult = await response.json();

    if (updateResult.data.modifiedCount >= 1) {
      console.log("Success Data Updated Successfully ");
    } else {
      console.log(`Error`, updateResult);
    }
  } catch (error) {
    console.log("Error Occured ", error);
  }
};

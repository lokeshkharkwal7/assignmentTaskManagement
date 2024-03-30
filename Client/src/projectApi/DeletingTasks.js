export const removeTaskDB = async (_id) => {
    const url = "https://assignment-task-management-backend.vercel.app"
    const response = await fetch(`${url}/deleteTask`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        _id: _id,
      }), // body data type must match "Content-Type" header
    });
    const output = await response.json();
    if (output.status === true) {
      console.log("Data is deleted successfully");
    } else {
      console.log("Unable to delete data to the Server");
    }
  };
  
  
   
  
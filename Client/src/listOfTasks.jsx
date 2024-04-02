import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import AddTask from "./AddTask";
import { taskUpdate } from "./redux/slicers";
import { updateTaskDb } from "./projectApi/UpdatingTasks";

function ListOfTasks() {
  const dispatch = useDispatch();
  const raw = useSelector((state) => {
    return state.TASKMANAGEMENT.data;
  });

  const completedData = raw.filter((task) => {
    return task.completed === "true";
  });
  const notCompletedData = raw.filter((task) => {
    return task.completed === "false";
  });

  function getPriority(param) {
    // let priorityCard;
    switch (param) {
      case "High":
        // priorityCard = "danger";
        return "danger";
        break;
      case "Medium":
        // priorityCard = "primary";
        return "primary";
        break;
      case "Low":
        // priorityCard = "success";
        return "success";

        break;

      default:
        return "light";
        break;
    }
  }

  const toggleComplete = (task, status) => {
    console.log("The value of task is : ", task);
    dispatch(
      taskUpdate({ title: task.title, formData: { completed: status } })
    );
    updateTaskDb(task._id, { completed: status });
  };

  const clicked = () => {
    console.log("The Data that is present inside the raw is : ", raw);
    // console.log("The Data that is present inside the filterd Data is : ", data);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/564x/77/30/70/773070328f36e6f5a1f913a80c90ba4d.jpg"
        ></img>
        <div className=" ">
          <h1 className="  text-secondary text-center mt-5">
            Welcome to the Dashboard <i className="fa-solid fa-door-open"></i>
          </h1>

          <AddTask />
          <h3 className="text-secondary text-center mt-5">
            Please Choose From The Below Options{" "}
            <i className="fa-solid fa-down-long mx-1"></i>
          </h3>
        </div>
      </div>

      <CategoryNavbar />

      {/* <h1 className="display-4 text-center mb-4 mt-2">
        {sortBy === "true" ? "Completd" : "Not Completed"} Task Status
      </h1> */}

      <div class="container mt-2">
        <div class="row">
          <div class="col">
            <div class="list-group">
              <h3 className="text-secondary text-center mb-4 mt-2">
                <i className="fa-solid fa-xmark mx-3"></i>
                Not Completed
              </h3>
              {notCompletedData.map((task) => (
                <button
                  type="button"
                  class={`list-group-item list-group-item-${getPriority(
                    task.priority
                  )} active`}
                  aria-current="true"
                >
                  {task.title} <span className="mx-3">{task.category}</span>
                  {task.completed === "false" ? (
                    <button
                      className={`btn btn-light text-dark my-1`}
                      onClick={() => toggleComplete(task, "true")}
                    >
                      Done <i className="fa-solid fa-check-double"></i>
                    </button>
                  ) : (
                    <button
                      className={`btn btn-light text-dark my-1`}
                      onClick={() => toggleComplete(task, "false")}
                    >
                      Not Done <i className="fa-regular fa-clock"></i>
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div class="col">
            <div class="list-group">
              <h3 className="text-secondary text-center mb-4 mt-2">
                <i className="fa-solid fa-check mx-2"></i>
                Completed
              </h3>

              {completedData.map((task) => (
                <button
                  type="button"
                  class={`list-group-item list-group-item-${getPriority(
                    task.priority
                  )} active`}
                  aria-current="true"
                >
                  {task.title} <span className="mx-3">{task.category}</span>
                  {task.completed === "false" ? (
                    <button
                      className={`btn btn-light text-dark my-1 mx-2`}
                      onClick={() => toggleComplete(task, "true")}
                    >
                      Done <i className="fa-solid fa-check-double"></i>
                    </button>
                  ) : (
                    <button
                      className={`btn btn-light text-dark my-1 mx-2`}
                      onClick={() => toggleComplete(task, "false")}
                    >
                      Not Done <i className="fa-regular fa-clock"></i>
                    </button>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOfTasks;

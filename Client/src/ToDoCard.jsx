import React from "react";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { removeTask, taskUpdate } from "./redux/slicers";
import { removeTaskDB } from "./projectApi/DeletingTasks";
import { updateTaskDb } from "./projectApi/UpdatingTasks";

function ToDoCard({
  id,
  title,
  description,
  priority,
  category,
  completed,
  createdAt,
}) {
  const dispatch = useDispatch();
  let priorityCard;
  switch (priority) {
    case "High":
      priorityCard = "danger";
      break;
    case "Medium":
      priorityCard = "primary";
      break;
    case "Low":
      priorityCard = "success";

      break;

    default:
      return "light";
      break;
  }

  const deleteTask = () => {
    // updating on the redux
    dispatch(removeTask(id));
    // updating on the database
    removeTaskDB(id);
  };
  const toggleComplete = (param) => {
    dispatch(taskUpdate({ title: title, formData: { completed: param } }));
    updateTaskDb(id, { competed: param });
  };

  return (
    <div className="px-2 py-2">
      <div
        className={`card bg-${priorityCard} text-light`}
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            <i class="fa-solid fa-star mx-2"></i> {title}
          </h5>
          <h6 className="card-title">Priority : {priority}</h6>
          <h6 className="card-title">Category : {category}</h6>
          <p className="card-text">{description}</p>
          <div className="d-flex">
            <button className="btn" onClick={deleteTask}>
              <i className="fa-solid fa-trash"></i> Delete
            </button>
            <EditTask
              id={id}
              title={title}
              description={description}
              priority={priority}
              category={category}
              completed={completed}
              createdAt={createdAt}
            />
          </div>

          {completed ? (
            <button
              className={`btn btn-light text-dark my-1`}
              onClick={() => toggleComplete(false)}
            >
              Done <i className="fa-solid fa-check-double"></i>
            </button>
          ) : (
            <button
              className={`btn btn-light text-dark my-1`}
              onClick={() => toggleComplete(true)}
            >
              Not Done <i className="fa-regular fa-clock"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoCard;

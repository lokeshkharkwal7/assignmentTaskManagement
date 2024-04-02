import React from "react";
import { useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";
import AddTask from "./AddTask";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import Spinner from "./spinner";

function DoandUndo({sortBy}) {
  const rawData = useSelector((state) => {
    return state.TASKMANAGEMENT.data;
  });
  const data = rawData.filter((value) => {
    return value.completed === String(sortBy);
  });
  const clicked = () => {
    console.log("Raw Data ", rawData);
    console.log(data);
    console.log(sortBy);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/564x/77/30/70/773070328f36e6f5a1f913a80c90ba4d.jpg"
        ></img>
        <AddTask />
      </div>

      <CategoryNavbar />
      <h2 className="mt-4 mb-4 mx-3"> Task Status </h2>
      <button onClick={clicked}>Clicked</button>

      {data.length === 0 ? (
        <Spinner />
      ) : (
        <div className="container-fluid d-flex flex-wrap">
          {data.map((task) => (
            <div key={task._id}>
              <ToDoCard
                id={task._id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                category={task.category}
                completed={task.completed}
                createdAt={task.createdAt}
              ></ToDoCard>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DoandUndo;

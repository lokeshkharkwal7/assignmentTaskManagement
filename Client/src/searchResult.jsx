import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import ToDoCard from "./ToDoCard";

function SearchResults() {
  const results = useSelector((state) => {
    return state.TASKMANAGEMENT.searchedData;
  });
  const clicked = () => {
    console.log(results);
  };

  return (
    <div>
      <Navbar />
      <h2 className="text-center my-3">
        {" "}
        <i className="fa-solid fa-magnifying-glass mx-1"></i>Your Results
      </h2>
      <div className="container-fluid d-flex  flex-row flex-wrap">
        {results.map((task) => {
          return (
            <div key={task.id}>
              <ToDoCard
                id={task.id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                category={task.category}
                completed={task.completed}
                createdAt={task.createdAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;

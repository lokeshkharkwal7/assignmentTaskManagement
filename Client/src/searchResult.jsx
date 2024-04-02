import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import ToDoCard from "./ToDoCard";
import Spinner from "./spinner";

function SearchResults() {
  const results = useSelector((state) => {
    return state.TASKMANAGEMENT.searchedData;
  });
  const searchedValue = useSelector((state) => {
    return state.TASKMANAGEMENT.searchText;
  });
  const clicked = () => {
    console.log(results);
  };

  return (
    <>
      {/* <Navbar /> */}
      <h2 className="text-center my-3">
        {" "}
        <i className="fa-solid fa-magnifying-glass mx-1"></i>Your Results
      </h2>

      {results.length === 0 ? (
        <Spinner />
      ) : results[0] === "No Data" ? (
        <h2 className="text-center text-secondary">
          Sorry No Result Found for the {searchedValue}
        </h2>
      ) : (
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
      )}
    </>
  );
}

export default SearchResults;

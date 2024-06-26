import React, { useEffect, useState } from "react";

import ToDoCard from "./ToDoCard";
import AddTask from "./AddTask";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/slicers";
 
import { allCategories } from "./data";
 
import Spinner from "./spinner";

function Home() {
  const dispatch = useDispatch();
  const taskManagementSlicer = useSelector((state) => {
    return state.TASKMANAGEMENT.data;
  });

  const selectCategory = useSelector((state) => {
    return state.TASKCATEGORY;
  });

  const selectPriority = useSelector((state) => {
    return state.TASKPRIORITY;
  });

  // const data  =  [...taskManagementSlicer]
  const [data, setData] = useState(taskManagementSlicer);

  // if Everyghint is selected then no filtering else category

  const clicked = () => {
    console.log("The value of data is : ", taskManagementSlicer);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  useEffect(() => {
    if (selectCategory === "Everything") {
      setData(taskManagementSlicer);
    } else {
      let tempTasks = taskManagementSlicer.filter(
        (task) => task.category === selectCategory
      );
      setData(tempTasks);
    }
  }, [selectCategory, taskManagementSlicer]);

  return (
    <>
      <Navbar />
 
      {data.length === 0 && (
        <div className="mt-4">
          <Spinner />
        </div>
      )}
 
      <div className="d-flex flex-wrap">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/564x/77/30/70/773070328f36e6f5a1f913a80c90ba4d.jpg"
        ></img>
        <div className=" ">
          <h1 className="text-secondary text-center mt-5">
            Welcome to the Dashboard <i className="fa-solid fa-door-open"></i>
          </h1>

          <AddTask />
          <h3 className="text-secondary text-center  mb-3">
            Please Choose From The Below Options{" "}
            <i className="fa-solid fa-down-long mx-1"></i>
          </h3>
        </div>
      </div>

      <CategoryNavbar />
 
      <h2 className="mt-5 mb-4 mx-3">
 
   
        {" "}
        Below is the list of tasks that are arranged as per their priority{" "}
      </h2>

      {/* <button className="btn" onClick={clicked}>
        Get Info
      </button> */}

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

export default Home;

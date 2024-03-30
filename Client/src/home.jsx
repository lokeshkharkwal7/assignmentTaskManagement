import React, { useEffect, useState } from "react";

import ToDoCard from "./ToDoCard";
import AddTask from "./AddTask";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import EditTask from "./EditTask";
import image from "../src/images/taskManagment.png";
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
        {data.length === 0  && <Spinner/>  }
      <div className="d-flex flex-wrap">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/564x/77/30/70/773070328f36e6f5a1f913a80c90ba4d.jpg"
        ></img>
        <AddTask />
      </div>

      <CategoryNavbar />
      <h2 className="mt-4 mb-4">
        {" "}
        Below is the list of tasks that are arranged as per their priority{" "}
      </h2>

      {/* <button className="btn" onClick={clicked}>
        Get Info
      </button> */}
    

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
    </>
  );
}

export default Home;

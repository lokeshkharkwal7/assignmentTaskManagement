import React, { useEffect, useState } from "react";

import AddTask from "./AddTask";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./spinner";
import Chart from "./Chart";

function AnalysisTask() {
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
  return (
    <>
      <Navbar />
      {raw.length === 0 && (
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
      <h1 className="text-center mt-4 mb-4 text-info">Task Analysis</h1>
      <Chart testData={raw} />
    </>
  );
}

export default AnalysisTask;

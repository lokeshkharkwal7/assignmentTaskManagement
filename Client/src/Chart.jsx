import React, { useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { allCategories } from "./data";
function Chart({ testData }) {
  const updatedData = testData.map((data) => {
    if (data.completed === "true") {
      return { ...data, ["completed"]: "Completed" };
    } else {
      return { ...data, ["completed"]: "Not Completed" };
    }
  });
  const rawlabel = updatedData.map((data) => data["completed"]);
  const labelTransformed = [...new Set(rawlabel)]; // only taking non duplicate values
  const trueDataLength = updatedData.filter(
    (data) => data.completed === "Not Completed"
  ).length;
  const falseDataLength = updatedData.filter(
    (data) => data.completed === "Completed"
  ).length;
  //   for Categorical Analysis
  let arrayCatData = [];
  const catdataLabel = new Set(updatedData.map((data) => data["category"]));
  const categories = allCategories.filter((cat) => cat !== "Everything");
  categories.map((taskData) => {
    arrayCatData.push(
      updatedData.filter((data) => data.category === taskData).length
    );
  });

  const data = {
    labels: labelTransformed,
    datasets: [
      {
        label: `Total`,
        data: [trueDataLength, falseDataLength],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.2)",
        //   "rgba(54, 162, 235, 0.2)",
        //   "rgba(255, 206, 86, 0.2)",
        //   "rgba(75, 192, 192, 0.2)",
        //   "rgba(153, 102, 255, 0.2)",
        //   "rgba(255, 159, 64, 0.2)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"], // Optional: Line color
        backgroundColor: ["#FF7F7F", "#8AD0FF"], // Optional: Fill color under the line
        borderWidth: 1, // Optional: Line width (in pixels)
      },
    ],
  };
  const catSort = {
    labels: categories,
    datasets: [
      {
        label: `Category Wise Sort`,
        data: arrayCatData,

        borderColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"], // Optional: Line color
        backgroundColor: ["#8AD0FF"], // Optional: Fill color under the line
        borderWidth: 1, // Optional: Line width (in pixels)
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        // Custom label content based on data index
        content: (context) => {
          const label =
            context.dataIndex === 0 ? "Task Completed" : "Not Completed Tasks";
          return label;
        },
        anchor: "end", // Optional: Place labels at the end of slices
        color: "black", // Optional: Set label text color
      },
    },
    // Optional chart configuration options
    responsive: true, // Makes the chart responsive to screen size
    maintainAspectRatio: false, // Allows for better pie chart display
    legend: {
      display: true, // Show the legend
      position: "bottom", // Place the legend below the chart
      labels: {
        fontSize: 16, // Set legend font size
      },
    },
    tooltips: {
      // Customize tooltips
      enabled: true, // Enable tooltips
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black background
      bodyColor: "#FFF", // White text color
      bodyFontSize: 14, // Set tooltip font size
      callbacks: {
        // Customize tooltip content
        label: (context) =>
          `${context.dataset.label}: ${
            context.dataIndex === 0 ? true : false
          } - ${context.data[context.dataIndex]}`,
      },
    },
  };
  //   .chart-container {
  //     height: 400px; /* Adjust the height as desired */
  //     /* Optional: Add other styling for the chart container */
  //   }
  const clicked = () => {};
  return (
    <div>
      {/* <button onClick={clicked}>button</button> */}
      {/* <Doughnut data={data} /> */}
      {/* <Bar data={data} /> */}
      <div className="container-fluid d-flex flex-row flex-wrap ">
        <div
          className="card overflow-scroll mx-1 my-1                 "
          style={{ width: "40rem" }}
        >
          <h2 className="text-center text-secondary mt-4 mb-4">
            Completed Vs Not Completed Status
          </h2>
          <Pie data={data} />{" "}
        </div>

        <div
          className="card overflow-scroll mx-1 my-1                 "
          style={{ width: "40rem" }}
        >
          {" "}
          <div className="mt-5">
            {" "}
            <Bar data={catSort} />{" "}
          </div>
          <h2 className="text-center text-secondary mt-4 mb-4">
            Category wise Data Representation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Chart;

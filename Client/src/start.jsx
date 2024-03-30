import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function StartPage() {
  return (
    <div className="bg-primary">
      <Navbar />
      <br /> <br />
      <div className="container-fluid d-flex flex-wrap ">
        <h1 className="display-1 text-light">
          Welcome to the Task Management Application!!{" "}
          <i className="fa-solid fa-id-card-clip"></i>
        </h1>{" "}
        <img
          //   src={photos}
          src="https://i.pinimg.com/originals/e7/5a/21/e75a2197c4e772c605f411f371ba9594.gif"
          alt="..."
          className="img-fluid mt-5 mb-5"
          style={{ borderRadius: "20%" }}
        ></img>
        <Link to="/home" className="text-decoration-none text-dark mt-4">
          <button
            className="btn btn-light mx-5 "
            style={{ borderRadius: "12%", height: "12rem" }}
          >
            {" "}
            <h3 className="display-1 fs-1 px-2 ">
              Go To the DashBoard{" "}
              <i className="fa-solid fa-gauge-simple-high"></i>
            </h3>
          </button>
        </Link>
        <img
          //   src={photos}
          //   src="https://i.pinimg.com/originals/90/7c/cb/907ccb5b4bef6233b098f54cce649208.gif"
          src="https://i.pinimg.com/originals/b7/39/41/b739413d783337190486a6eaa9239714.gif"
          alt="..."
          className="img-fluid mt-5 mb-5"
          style={{ borderRadius: "20%", width: "21rem" }}
        ></img>
        <h1 className="mt-4 mx-5">...</h1>
      </div>
    </div>
  );
}

export default StartPage;

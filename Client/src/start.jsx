import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function StartPage() {
  return (
    <div className="bg-primary">
      <Navbar />
      <br /> <br />
      <div className="container-fluid d-flex flex-wrap ">
        <h1 className="display-1 text-light ">
          Task Management Application!!{" "}
          <i className="fa-solid fa-id-card-clip"></i>
        </h1>{" "}
        <img
          //   src={photos}
          src="https://i.pinimg.com/originals/0e/7c/46/0e7c46a5c4a9876e0a487c44840327e7.gif"
          alt="..."
          className="img-fluid mt-5 mb-5"
          style={{ borderRadius: "20%", width: "21rem" }}
        ></img>
        <Link to="/home" className="text-decoration-none text-dark mt-4">
          <button
            className="btn btn-primary mt-3 mx-5 border-info"
            style={{ borderRadius: "12%", height: "9rem" }}
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
          src="https://i.pinimg.com/564x/1d/0d/46/1d0d46d92a0b6564544b8a47edc1c473.jpg"
          alt="..."
          className="img-fluid mt-5 mb-5 mx-5"
          style={{ borderRadius: "20%", width: "21rem" }}
        ></img>
        {/* <h1 className="mt-4 mx-5">...</h1> */}
      </div>
    </div>
  );
}

export default StartPage;

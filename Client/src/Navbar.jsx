import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchTaskDb } from "./projectApi/Searching";
import { useDispatch } from "react-redux";

function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const searchTask = (e) => {
    e.preventDefault();
    // Saving Data to Redux Toolkit
    searchTaskDb(dispatch, search);
    navigate("/searchTask");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand">
            <i className="fa-solid fa-list-check"></i> Task Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  My Tasks
                </Link>
              </li>
              <form className="d-flex mx-5" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search your Tasks"
                  aria-label="Search"
                  style={{ width: "20rem" }}
                  onChange={onChange}
                />
                <button className="btn btn-success mx-3" onClick={searchTask}>
                  Search
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

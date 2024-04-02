import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "./redux/categorySlicer";
import { setPriority } from "./redux/PrioritySlicer";
import { allCategories } from "./data";
import { Link } from "react-router-dom";

function CategoryNavbar(filter) {
  const dispatch = useDispatch();

  const selectCategory = (category) => {
    console.log("Category slected in the cat navbar is : ", category);
    dispatch(setCategory(category));
  };

  const setPriority = (priority) => {
    dispatch(setPriority(priority));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <i className="fa-solid fa-list mx-1"></i> Please Choose The Category
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-rectangle-list mx-1"></i> Category
                </a>
                <ul className="dropdown-menu">
                  {/* Map over unique categories to create dropdown items */}
                  {allCategories.map((category, index) => (
                    <li key={index}>
                      <button
                        className="dropdown-item"
                        onClick={() => selectCategory(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

             
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Home"
                  >
                    <i className="fa-solid fa-arrow-left"></i> Back to All Data
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/category/completedUncompleted/done"
                  >
                    <i className="fa-solid fa-bars-progress mx-1"></i> Task
                    Status
                  </Link>
                </li>
                <li className="nav-item">


                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/analytics"
                  >
                    <i className="fa-solid fa-bars-progress mx-1"></i> Task
                    Analytics
                  </Link>
                </li>

              {/* <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => setPriority("Low")}
                >
                  Low
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CategoryNavbar;

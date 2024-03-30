import React, { useState } from "react";
import Modal from "react-modal";
import { addingTask } from "./projectApi/AddingTasks";
import { useDispatch } from "react-redux";
import { addToTask } from "./redux/slicers";
import { allCategories } from "./data";

function AddTask() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [taskData, setTaskData] = useState();
  const categories = allCategories.slice(1, 13);

  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40rem",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.id]: e.target.value,
    });
    console.log(taskData);
  };

  const addTask = () => {
    // adding to redux

    console.log(taskData);

    dispatch(addToTask(taskData));

    // pushing to databse
    addingTask(taskData);
    closeModal();
  };

  return (
    <div>
      <button
        className="btn btn-info mt-3 fs-1 py-4 px-3 mb-5 mt-5"
        onClick={openModal}
        style={{
          display: "absolute",

          //   marginLeft: "40%",
          //   marginRight: "40%",
          borderRadius: "20rem",
        }}
      >
        Click To Initiate a new Task{" "}
        <i className="fa-solid fa-plus fs-1 mx-2"></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex flex-wrap">
          <h1 className="display-5">
            {" "}
            Please Add A Task <i className="fa-solid fa-plus fs-1 mx-1"></i>
          </h1>
          <button
            className="btn btn-light mx-5 float-right"
            onClick={closeModal}
            style={{
              height: "3rem",
              width: "4rem",
              position: "absolute",
              top: "10px",
              right: 0,
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              id="description"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              priority
            </label>

            <select id="priority" className="form-select" onChange={onChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              category
            </label>

            <select id="category" className="form-select" onChange={onChange}>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
            
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              completed
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              id="completed"
              value={"Not Completed"}
              disabled
            />
          </div>

        
          <button className="btn btn-primary" onClick={addTask}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;

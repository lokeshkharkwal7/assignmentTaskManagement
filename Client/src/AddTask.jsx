import React, { useState } from "react";
import Modal from "react-modal";
import { addingTask } from "./projectApi/AddingTasks";
import { useDispatch } from "react-redux";
import { addToTask } from "./redux/slicers";
import { allCategories } from "./data";

function AddTask() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "High",
    category: allCategories[1],
    completed: "Not Completed",
  });

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const addTask = async () => {
    console.log(taskData);
    dispatch(addToTask(taskData));
    await addingTask(taskData);
    closeModal();
  };

  return (
    <div>
      <button
        className="btn btn-info mt-3 fs-1 py-4 px-3 mb-5 mt-5"
        onClick={openModal}
        style={{
          display: "absolute",
          borderRadius: "20rem",
        }}
      >
        Click To Initiate a new Task{" "}
        <i className="fa-solid fa-plus fs-1 mx-2"></i>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="d-flex flex-wrap">
          <h1 className="display-5">
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
            <label htmlFor="title" className="form-label">
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
            <label htmlFor="description" className="form-label">
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
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <select
              id="priority"
              className="form-select"
              onChange={onChange}
          
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              className="form-select"
              onChange={onChange}
            
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="completed" className="form-label">
              Completed
            </label>
            <input
              type="text"
              className="form-control"
              id="completed"
            
              disabled
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={addTask}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AddTask;

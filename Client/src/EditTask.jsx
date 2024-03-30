import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { updateTaskDb } from "./projectApi/UpdatingTasks";
import { taskUpdate } from "./redux/slicers";
import { allCategories } from "./data";

function EditTask({
  id,
  title: initialTitle,
  description: initialDescription,
  priority: initialPriority,
  category: initialCategory,
  completed: initialCompleted,
  createdAt,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: initialTitle,
    description: initialDescription,
    priority: initialPriority,
    category: initialCategory,
    completed: initialCompleted,
  });
  const [onClickData, setOnClickData] = useState();

  const dispatch = useDispatch();

  const categories = allCategories.slice();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40rem",
      color: "black",
    },
  };

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.id]: e.target.value,
    }));
  };

  const updateTask = () => {
    console.log(formData);

    dispatch(taskUpdate({ title: initialTitle, formData: formData }));
    updateTaskDb(id, formData);
    closeModal();
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        <i className="fa-solid fa-pen"></i> Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Task Modal"
      >
        {/* <h1>Edit The Task</h1> */}
        <div className="d-flex flex-wrap">
          <h1 className="display-5">
            {" "}
            Edit The Task <i className="fa-solid fa-pen mx-1"></i>
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
              id="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              priority
            </label>

            <select
              id="priority"
              className="form-select"
              onChange={handleInputChange}
              value={formData.priority}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>
            <input
              type="text"
              className="form-control"
              id="priority"
              value={formData.priority}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              category
            </label>
            value={formData.category}
            <select
              id="category"
              className="form-select"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="completed" className="form-label">
              Completed
            </label>
            {/* <input
              type="text"
              className="form-control"
              id="completed"
              value={formData.completed}
              onChange={handleInputChange}
            />
          </div> */}
            <select
              id="completed"
              className="form-select"
              onChange={handleInputChange}
            >
              <option value="true">Done</option>
              <option value="false">Not Done</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" onClick={updateTask}>
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default EditTask;

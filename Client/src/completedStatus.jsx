import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function completedStatus() {
    const [completed , setCompleted] =  useState(true) 
    const taskManagementSlicer = useSelector((state) => {
        return state.TASKMANAGEMENT.data;
      });

    const data = taskManagementSlicer.filter((task)=>{
        return task.completed === true
    })



  return (
    <div>
      <Navbar />
      <div className="d-flex flex-wrap">
        <img
          className="img-fluid"
          src="https://i.pinimg.com/564x/77/30/70/773070328f36e6f5a1f913a80c90ba4d.jpg"
        ></img>
        <AddTask />
      </div>

      <CategoryNavbar />

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
    </div>
  )
}

export default completedStatus

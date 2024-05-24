/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable array-callback-return */
import React from "react";


const Card = ({ tasks, deleteTask, updateTask }) => {
  //console.log(tasks);

  //const deleteTask = (task_id) => {
  //  console.log(task_id)
  //}
  const handleDeleteTask = (id) => {
    if(confirm("Are you sure ?")) {
      deleteTask(id)
    }
  }

  return (
    <div>
      {tasks.map((task) => 
        <div key={task.id} className={task.complete == true ? `list-group-item w-100 mt-3 shadow-sm bg-success text-decoration-line-through text-white` : "list-group-item w-100 mt-3 shadow-sm"}>
          <div className="row">
            <div className="col-9 offset-1 "><input className="mx-2" type="checkbox" onClick={ ()=> updateTask(task.id, !task.complete)} checked={task.complete} readOnly />{task.task}</div>
            <div className="col-2">
            <i className="fa-solid fa-xmark fs-4" onClick={()=> handleDeleteTask(task.id)}></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;

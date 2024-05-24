import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form.jsx";
import { api } from "./api/apiResourse.js";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const fetchData = async () => {
    const res = await api.get("/todolist");

    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [tasks]);

  const submitTask = async (userTask) => {
    const data = {
      id: uuid(),
      task: userTask,
      complete: false
    }

    await api.post("todolist", data)
  };

  const deleteTask = async(task_id) => {
    await api.delete(`/todolist/${task_id}`)
  }

  const updateTask = async(task_id,complete) => {
    await api.patch(`/todolist/${task_id}`,{complete})
  }
  return (
    <div className="mx-auto w-50 mt-5">
      <Form submitTask={submitTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;

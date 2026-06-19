import { Component } from "react";

const Tasks = ({ title, id, completetask }) => {
  return (
    <div className="task-item">
      <p>{title}</p>
      <button onClick={() => completetask(id)}>complete task</button>
    </div>
  );
};

export default Tasks;

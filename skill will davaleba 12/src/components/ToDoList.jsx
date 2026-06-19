import React, { Component } from "react";
import Tasks from "./Tasks.jsx";
import "../App.css";

export default class ToDoList extends Component {
  state = {
    inputvalue: "",
    tasks: [
      {
        id: 1,
        title: "პრავის აღება",
      },
    ],
    completed: [],
  };

  onChange = (event) => {
    const value = event.target.value;

    this.setState({ inputvalue: value });
  };
  addTask = (event) => {
    event.preventDefault();

    const task = {
      id: this.state.tasks.length + 1,
      title: this.state.inputvalue,
    };
    this.setState({
      tasks: [...this.state.tasks, task],
      inputvalue: "",
    });
  };

  completetask = (id) => {
    const task = this.state.tasks.find((t) => t.id === id);

    this.setState({
      tasks: this.state.tasks.filter((t) => t.id !== id),

      completed: [...this.state.completed, task],
    });
  };

  render() {
    return (
      <div className="ToDo">
        <form onSubmit={this.addTask} className="form">
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.inputvalue}
          />
          <button type="submit">add task</button>
        </form>
        <div className="task">
          <h2 className="p">შესასრულებელი დავალება</h2>
          {this.state.tasks.map((t) => (
            <Tasks
              key={t.id}
              id={t.id}
              title={t.title}
              completetask={this.completetask}
            />
          ))}
        </div>

        <div className="compl">
          <h2>შესრულებული დავალება</h2>
          {this.state.completed.map((m) => (
            <Tasks key={m.id} title={m.title} />
          ))}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import tasks from "./data";

import TodoList from "./TodoList";

class App extends Component {
  render() {
    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <table>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>TASK</th>
              <th>PRIORITY</th>
            </tr>
          </thead>
          <tbody>
            <TodoList tasks={tasks} statusIcon={statusIcon} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

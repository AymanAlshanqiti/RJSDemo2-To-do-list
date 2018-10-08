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
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class TodoList extends Component {
  render() {
    const tasksRows = this.props.tasks.map(task => {
      return (
        <tr key={task.task}>
          <td>
            <i className={this.props.statusIcon(task.done)} />
          </td>
          <td>{task.task}</td>
          <td className={task.priority}>{task.priority}</td>
        </tr>
      );
    });
    return tasksRows;
  }
}

export default TodoList;

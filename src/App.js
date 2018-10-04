import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";

import Table from "./Table";

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
        <Table />
      </div>
    );
  }
}

export default App;

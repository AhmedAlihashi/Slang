import React, { Component } from "react";
import App from "./App";

export default class Core extends Component {
  componentDidMount() {
    console.log("Brain Here");
  }
  render() {
    return <App />;
  }
}

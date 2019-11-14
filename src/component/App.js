import React, { Component, Fragment } from "react";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import SimpleGrow from "./layouts/fadein";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <SimpleGrow />
      </Fragment>
    );
  }
}

export default App;

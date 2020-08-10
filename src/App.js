import React, { Component } from "react";
import GuestPhonebook from "./Components/GuestPhonebook/GuestPhonebook";
import "./App.css";
import contactOperations from "./operations/contactOperations";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onFetch();
  }
  render() {
    return (
      <div className="App">
        <GuestPhonebook />
      </div>
    );
  }
}
const mapDispatchToProps = {
  onFetch: contactOperations.getContacts,
};

export default connect(null, mapDispatchToProps)(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signout extends Component {
  // When the component is loaded, sign the user out
  // Removes the authenticated JWT from the reducer, and clears the localStorage key
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return <div>Sorry to see you go</div>;
  }
}

export default connect(
  null,
  actions
)(Signout);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <Container>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
`;

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

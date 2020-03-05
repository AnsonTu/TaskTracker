import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <HeaderLink to="/signout">Sign Out</HeaderLink>
          <HeaderLink to="/home">Home Page</HeaderLink>
        </div>
      );
    } else {
      return (
        <div>
          <HeaderLink to="/signup">Sign Up</HeaderLink>
          <HeaderLink to="/signin">Sign In</HeaderLink>
        </div>
      );
    }
  }
  render() {
    return (
      <Container>
        <div>
          <HeaderLink to="/">Menu</HeaderLink>
        </div>
        {this.renderLinks()}
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  top: 8px;
  width: 100%;
  z-index: 999;
  display: flex;
`;

const HeaderLink = styled(Link)`
  padding: 8px 20px;
  background-color: gray;
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    background-color: lightgray;
  }
  &:link,
  &:visited {
    color: black;
  }
`;

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);

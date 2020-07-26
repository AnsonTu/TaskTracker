import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

const HeaderBar = ({ authenticated }) => {
  return (
    authenticated && (
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#691e82" }}>
          <HeaderLink to="/signout">Sign Out</HeaderLink>
          <HeaderLink to="/home">Home Page</HeaderLink>
        </Toolbar>
      </AppBar>
    )
  );
};

const HeaderLink = styled(Link)`
  padding: 8px 20px;
  background-color: #691e82;
  border-right: 2px solid #000000;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    background-color: lightgray;
  }
  &:link,
  &:visited {
    color: #ffffff;
  }
`;

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(HeaderBar);

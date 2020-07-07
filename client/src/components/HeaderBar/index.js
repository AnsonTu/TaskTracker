import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import ButtonLink from "../ButtonLink";

const HeaderBar = ({ authenticated }) => {
  return (
    authenticated && (
      <AppBar position="static">
        <Toolbar variant="dense" style={{ backgroundColor: "#691e82" }}>
          <ButtonLink to="/home">
            <HomeIcon />
          </ButtonLink>
          <ButtonLink to="/signout">Sign Out</ButtonLink>
        </Toolbar>
      </AppBar>
    )
  );
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(HeaderBar);

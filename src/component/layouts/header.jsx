import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactDOM from "react-dom";

import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";

// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./header.css";

const styles = {
  root: {
    flexGrow: 1
  },

  title: {
    flexGrow: 3,
    marginLeft: 30
  },
  btn: {
    marginRight: 30
  },
  show: {
    position: "fixed",
    color: "red",
    transform: "translateY(0)",
    transition: "transform .5s"
  },
  hide: {
    position: "static",
    color: "blue",
    transform: "translateY(1%)",
    transition: "transform .5s"
  }
};

class Header extends React.Component {
  state = {
    showTexts: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const el = e.target;

    if (window.scrollY >= 570) {
      this.setState({
        showTexts: true
      });
    } else {
      this.setState({
        showTexts: false
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div onScroll={this.handleScroll}>
        <div className="root">test</div>
        <AppBar
          className={this.state.showTexts ? classes.show : classes.hide}
          color="default"
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon className={classes.menuButton} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit" className={classes.btn}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);

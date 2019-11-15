import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
const styles = {
  root: {
    height: 180
  },
  container: {
    display: "flex"
  },
  paper: {
    marginTop: "200px",
    marginLeft: "20px"
  },
  svg: {
    width: 100,
    height: 100
  },
  hexagon: {
    width: 300,
    height: 150,
    backgroundColor: "#FFB6C1",
    overflow: "hidden",
    visibility: "hidden",
    transform: " rotate(120deg)"
  },
  hexagonInside: {
    width: " 100%",
    height: "100%",
    backgroundColor: "green",
    overflow: "hidden",
    transform: "rotate(-60deg)"
  },
  hexagonImg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFB6C1",
    visibility: "visible",
    transform: "rotate(-60deg)"
  }
};
class FadeIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      setChecked: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY == 400) {
      this.setState({
        checked: true,
        setChecked: true
      });
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div onScroll={this.handleScroll} className={classes.container}>
        <Grow
          in={this.state.checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.checked ? { timeout: 1000 } : {})}
        >
          <div elevation={4} className={classes.paper}>
            <div className={classes.hexagon}>
              <div className={classes.hexagonInside}>
                <div className={classes.hexagonImg}>hi</div>
              </div>
            </div>
          </div>
        </Grow>

        <Grow
          in={this.state.checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.checked ? { timeout: 2000 } : {})}
        >
          <div elevation={4} className={classes.paper}>
            <div className={classes.hexagon}>
              <div className={classes.hexagonInside}>
                <div className={classes.hexagonImg}>hi</div>
              </div>
            </div>
          </div>
        </Grow>
        <Grow
          in={this.state.checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.checked ? { timeout: 4000 } : {})}
        >
          <div elevation={4} className={classes.paper}>
            <div className={classes.hexagon}>
              <div className={classes.hexagonInside}>
                <div className={classes.hexagonImg}>hi</div>
              </div>
            </div>
          </div>
        </Grow>
        <Grow
          in={this.state.checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(this.state.checked ? { timeout: 4000 } : {})}
        >
          <div elevation={4} className={classes.paper}>
            <div className={classes.hexagon}>
              <div className={classes.hexagonInside}>
                <div className={classes.hexagonImg}>hi</div>
              </div>
            </div>
          </div>
        </Grow>
      </div>
    );
  }
}

export default withStyles(styles)(FadeIn);

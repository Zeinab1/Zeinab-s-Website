import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}

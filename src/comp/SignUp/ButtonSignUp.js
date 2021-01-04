import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // justifySelf: 'flex-end',
    "& > *": {
      // margin: theme.spacing(1),
      borderColor: "white",
      color: "white",
      transtion: "1s",
    },
    "& > *:hover": {
      borderColor: "yellow",
      boxShadow: "2px 2px 10px yellow",
    },
  },
}));

export default function OutlinedButtons({ handleSignUp }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">
        Sign Up
      </Button>
    </div>
  );
}

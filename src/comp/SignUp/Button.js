import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderColor: "white",
      color: "white",
      transtion: "1s",
      margin: '5px'
    },
    "& > *:hover": {
      borderColor: "white",
      boxShadow: "2px 2px 10px white",
      backgroundColor: 'white',
      color:'black'
    },
  },
}));

export default function OutlinedButtons({ handleSignUp, text, onClick  }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
}

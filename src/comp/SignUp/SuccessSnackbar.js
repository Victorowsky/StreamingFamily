import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({setIsSuccess, isSuccess,successMessage}) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setIsSuccess(true);
  // };



  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSuccess(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={()=>setIsSuccess(false)} severity="success">
          {successMessage ? successMessage : "Success"}
        </Alert>
      </Snackbar>
    </div>
  );
}
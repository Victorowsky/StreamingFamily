import React, { useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import {DataContext} from '../../App'

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

export default function CustomizedSnackbars() {
  const {setIsError, isError, errorMessage} = useContext(DataContext)

  const classes = useStyles();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsError(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isError} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={()=>setIsError(false)} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

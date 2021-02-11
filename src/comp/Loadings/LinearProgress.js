import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    top:'-4px',
    borderRadius: '5px',
    width: '100%',
    '& .MuiLinearProgress-root':{
        borderRadius:'0 0 5px 5px'
    }
  },
}));

export default function LinearIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <LinearProgress />
    </div>
  );
}

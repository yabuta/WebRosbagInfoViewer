import React from 'react';
import { makeStyles } from '@material-ui/core';
import FileLoader from './FileLoader';

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    overflow: 'auto'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <FileLoader />
    </div>
  );
};

export default App;

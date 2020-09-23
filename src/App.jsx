import React from 'react';
import { Grid } from '@material-ui/core';
import './App.style.js';
import ProductsList from './containers/FetchAllProducts';
import FetchKeypadCode from './containers/FetchKeypadCode';
import ReceiveCash from './components/Money/ReceiveCash';
import Display from './components/Display/Display';
import useStyles from './App.style';


function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContent}>
      <Grid item className={classes.productsWrapper}>
        <ProductsList />
      </Grid>
      <Grid item className={classes.keypadWrapper}>
        <Display />
        <FetchKeypadCode />
        <ReceiveCash />
      </Grid>
    </Grid>
  );
}

export default App;

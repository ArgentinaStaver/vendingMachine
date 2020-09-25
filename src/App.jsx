import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './App.style.js';
import ProductsList from './containers/FetchAllProducts';
import FetchKeypadCode from './containers/FetchKeypadCode';
import CashContainer from './containers/ReceiveCash';
import DisplayContainer from './containers/Display';
import useStyles from './App.style';


const App = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContent}>
      <Grid item className={classes.title}>
        <Typography component="h1">Tonomat 24/24</Typography>
      </Grid>
      <Grid item className={classes.productsWrapper}>
        <ProductsList />
      </Grid>
      <Grid item className={classes.keypadWrapper}>
        <DisplayContainer />
        <FetchKeypadCode />
        <CashContainer />
      </Grid>
    </Grid>
  );
}

export default App;

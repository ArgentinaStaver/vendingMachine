import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Display.style';


const Display = ((props) => {
    const { selectedProduct, amount, price } = props;

    const classes = useStyles();
    let rest = 0;

    if (selectedProduct !== undefined && amount) {
        rest = parseInt(amount) - selectedProduct.price;
    }

    return (
        <Grid item className={classes.display}>
            <div className={classes.displayRow}>
                <label>Code:</label>
                <Typography component="span">{props.code}</Typography>
            </div>
            <div className={classes.displayRow}>
                <label>Price:</label>
                <Typography component="span">{props.selectedProduct?.price}</Typography>
            </div>
            <div className={classes.displayRow}>
                <label>Inserted money:</label>
                <Typography component="span">{props.amount}</Typography>
            </div>
            <div className={classes.displayRow}>
                <label>Rest:</label>
                <Typography component="span">{rest}</Typography>
            </div>
        </Grid>
    );
});

export default Display;

import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './Display.style';


const Display = ((props) => {
    const classes = useStyles();

    return (
        <Grid item className={classes.display}>
            <div className={classes.displayRow} >
                <label>Code produs:</label>
            </div>
            <div className={classes.displayRow} >
                <label>Suma introdusa:</label>
            </div>
            <div className={classes.displayRow}>
                <label>Rest:</label>
            </div>
        </Grid>
    );
});

export default Display;

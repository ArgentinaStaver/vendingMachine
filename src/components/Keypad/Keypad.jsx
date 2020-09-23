import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './Keypad.style';


const Keypad = ((props) => {
    const classes = useStyles();
    console.log(props);
    const [code, setCode] = useState('');



    const handleClick = (digit) => {
        const newCode = code + digit;
        props.fetchKeypadCode(newCode);
        //setCode(newCode);
    }

    console.log(props);
    return (
        <Grid item className={classes.keypadWrapper}>
            <Grid item className={classes.rowKeypad}>
                <div className={classes.key} onClick={() => handleClick(7)}>
                    <kbd>7</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(8)}>
                    <kbd>8</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(9)}>
                    <kbd>9</kbd>
                </div>
            </Grid>
            <Grid item className={classes.rowKeypad}>
                <div className={classes.key} onClick={() => handleClick(4)}>
                    <kbd>4</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(5)}>
                    <kbd>5</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(6)}>
                    <kbd>6</kbd>
                </div>
            </Grid>
            <Grid item className={classes.rowKeypad}>
                <div className={classes.key} onClick={() => handleClick(1)}>
                    <kbd>1</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(2)}>
                    <kbd>2</kbd>
                </div>
                <div className={classes.key} onClick={() => handleClick(3)}>
                    <kbd>3</kbd>
                </div>
            </Grid>
            <Grid item className={classes.rowKeypad} onClick={() => handleClick(0)}>
                <div className={classes.key}>
                    <kbd>0</kbd>
                </div>
            </Grid>
        </Grid>
    );
});

export default Keypad;

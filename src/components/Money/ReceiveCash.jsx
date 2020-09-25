import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import useStyles from './ReceiveCash.style';


const ReceiveCash = ((props) => {
    const classes = useStyles();
    const [productToDeliver, setProductToDeliver] = useState(undefined);
    const [rest, setRest] = useState(undefined);
    const [selectedProdName, setSelectedProdName] = useState(undefined);
    const [deliver, setDeliver] = useState(false);

    const handleCHange = (event) => {
        const { target: { value }} = event;
        props.setMoney(parseInt(value));
    }

    const handleConfirm = () => {
        props.decrementStock(props.code);
        props.setKeypadCode(null);
        props.setMoney("");
        setDeliver(true)
        setRest(undefined)
        setTimeout(() => {
            setSelectedProdName(undefined);
            setDeliver(false)
        }, 5000)
    }

    useEffect(() => {
        setProductToDeliver(props.selectedProduct);
        if (productToDeliver !== undefined && props.amount) {
            setSelectedProdName(productToDeliver.name);
            setRest(parseInt(props.amount) - productToDeliver.price);
        }
    });

    const insertedAmount = parseInt(props.amount);

    return (
        <>
        <Grid item className={classes.rowKeypad}>
            <TextField
                value={insertedAmount || ""}
                id="standard-number"
                label="Insert money"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleCHange}
            />
        </Grid>
        <Grid item className={classes.buttonWrapper}>
            <Button
                variant="contained"
                color="primary"
                disabled={rest === undefined || rest < 0}
                fullWidth={true}
                className={classes.confirmButton}
                onClick={handleConfirm}
            >
                Confirm
            </Button>
        </Grid>
        <Grid item className={classes.buttonWrapper}>
            {
                deliver && selectedProdName &&
                <Typography>Take your product: {selectedProdName}</Typography>
            }
        </Grid>
        </>
    );
});

export default ReceiveCash;

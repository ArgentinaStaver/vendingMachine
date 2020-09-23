import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Products.style';
import { products } from '../../reducers/productMock';

const Products = ((props) => {
    const classes = useStyles();

    props.fetchAllProducts(products);
    console.log(props);

    return (props.products.map((product) => (
        <div className={classes.product}>
            <Typography component="h1">{product.name}</Typography>
            <Typography>Stock: {product.quantity} unit</Typography>
            <Typography>Price: {product.price} ron</Typography>
            <Typography>Code: {product.code}</Typography>
        </div>
        ))
    );
});

export default Products;

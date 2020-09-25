import React, { useEffect} from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './Products.style';
import { products } from '../../reducers/productMock';

const Products = ((props) => {
    const classes = useStyles();

    useEffect(() => {
        props.fetchAllProducts(products);
      }, []);

    return (props.products.map((product, index) => (
        <div key={index} className={classes.product}>
            <Typography component="h1">{product.name}</Typography>
            <Typography>Stock: {product.quantity} unit</Typography>
            <Typography>Price: {product.price} ron</Typography>
            <Typography>Code: {product.code}</Typography>
        </div>
        ))
    );
});

export default Products;

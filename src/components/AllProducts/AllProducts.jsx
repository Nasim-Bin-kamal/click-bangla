import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
// import { products } from '../../Data/products';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { allProducts, isLoading } = useSelector(state => state?.products)
    // console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    if (isLoading) {
        return (
            <Box sx={{ my: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
        )
    }

    return (
        <div>
            <Container sx={{ my: 10 }}>
                <Typography variant='h4' sx={{ pt: 3, textAlign: 'center' }}>
                    ALL PRODUCTS
                </Typography>

                <Grid container spacing={4} sx={{ my: 5 }}>
                    {
                        allProducts?.map((product) => (<SingleProduct key={product?._id} product={product} />))
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AllProducts;
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './NewArrivals.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';


const NewArrivals = () => {
    const dispatch = useDispatch();
    const { allProducts, isLoading } = useSelector(state => state?.products)
    // console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    if (isLoading) {
        return (
            <Box sx={{ my: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
        )
    }

    return (
        <div>
            <Container sx={{ mb: 10 }}>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: 500 }}>
                    Top Seasonal products
                </Typography>

                <Grid container spacing={4}>
                    {
                        allProducts?.slice(0, 9).map((product) => (<SingleProduct key={product?._id} product={product} />))
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default NewArrivals;


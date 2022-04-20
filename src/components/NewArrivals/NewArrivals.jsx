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
                    New Arrivals
                </Typography>

                <Grid container spacing={4}>

                    {
                        allProducts?.slice(0, 8).map((product, _id) => (
                            <Grid item xs={12} md={4} lg={3} key={product?._id}>
                                <SingleProduct product={product} />
                            </Grid>
                        ))
                    }

                </Grid>

            </Container>
        </div>
    );
};

export default NewArrivals;


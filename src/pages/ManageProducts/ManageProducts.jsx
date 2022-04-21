import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../../redux/slices/productSlice';



const ManageProducts = () => {
    const dispatch = useDispatch();
    const { allProducts } = useSelector(state => state?.products)
    // console.log(allProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id));
    }


    return (
        <div>
            <Container>
                <Typography variant='h5' sx={{ mx: 'auto', my: 5, textAlign: 'center' }}>
                    Manage All Products
                </Typography>


                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ py: 2 }}>
                            <Grid container sx={{ mx: 'auto' }}>
                                <Grid item xs={12} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>ID</Typography>
                                </Grid>
                                <Grid item xs={12} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Product</Typography>
                                </Grid>
                                <Grid item xs={12} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Image</Typography>
                                </Grid>
                                <Grid item xs={12} md={1} lg={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Price</Typography>
                                </Grid>
                                <Grid item xs={12} md={3} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Update / Delete</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    {
                        allProducts?.map((product) => (
                            <Grid item xs={12} key={product?._id}>
                                <Paper elevation={1} sx={{ py: 1 }}>
                                    <Grid container sx={{ mx: 'auto' }}>
                                        <Grid item xs={12} md={3} lg={3} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?._id}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?.name}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box>
                                                <img src={product?.image} alt="" width="50px" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={1} lg={1} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?.price} Tk</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={4} lg={4} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button variant='outlined' color='secondary' sx={{ mr: 1 }}>Update</Button>
                                            <Button onClick={() => handleDeleteProduct(product?._id)} variant='outlined' color='error'>Delete</Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default ManageProducts;
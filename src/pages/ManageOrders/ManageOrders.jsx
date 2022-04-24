import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [modifiedCount, setModifiedCount] = useState(0);

    const cancelNotify = () => {
        toast.success('Order Cancel Successfully!!', {
            position: 'top-center',
            autoClose: 3000
        });
    }
    const approvedNotify = () => {
        toast.success('Order Approved Successfully!!', {
            position: 'top-center',
            autoClose: 3000
        });
    }
    useEffect(() => {
        fetch('https://polar-plains-17916.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setModifiedCount(0);
            });
    }, [modifiedCount]);



    const handleApproveOrder = (id) => {
        const data = { orderStatus: "Approved" };

        const url = `https://polar-plains-17916.herokuapp.com/orders/update/${id}`;
        axios.put(url, data)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    approvedNotify();
                    setModifiedCount(res?.data?.modifiedCount)

                }
            });
    }

    const handleCancelOrder = (id) => {
        const url = `https://polar-plains-17916.herokuapp.com/orders/${id}`;
        const proceed = window.confirm('Are you want to cancel this order');
        if (proceed) {
            axios.delete(url)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        cancelNotify();
                        const remainingOrders = orders?.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <Container>
                <Typography variant='h5' sx={{ mx: 'auto', my: 5, textAlign: 'center' }}>
                    My Orders
                </Typography>


                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Paper elevation={3} sx={{ py: 2 }}>
                            <Grid container sx={{ mx: 'auto' }}>

                                <Grid item xs={12} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Customer Name</Typography>
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
                                <Grid item xs={12} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'>Order Status</Typography>
                                </Grid>
                                <Grid item xs={12} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant='h6'> Approve / Delete</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    {
                        orders?.map((product) => (
                            <Grid item xs={12} key={product?._id}>
                                <Paper elevation={1} sx={{ py: 1 }}>
                                    <Grid container sx={{ mx: 'auto' }}>
                                        <Grid item xs={12} md={2} lg={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?.customerName}</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box>
                                                {
                                                    product?.orderedProduct?.map((singleProduct, p_id) => (
                                                        <p key={p_id} variant='body'>{singleProduct.name}</p>
                                                    ))
                                                }
                                            </Box>

                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Box>
                                                {
                                                    product?.orderedProduct?.map((singleProduct, p_id) => (
                                                        <Box>
                                                            <img src={singleProduct?.image} alt="" width="50px" />
                                                        </Box>
                                                    ))
                                                }
                                            </Box>

                                        </Grid>
                                        <Grid item xs={12} md={1} lg={1} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?.totalAmount} Tk</Typography>
                                        </Grid>
                                        <Grid item xs={12} md={2} lg={2} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='body'>{product?.orderStatus}</Typography>
                                        </Grid>

                                        <Grid item xs={12} md={3} lg={3} sx={{ py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                            <Button onClick={() => handleApproveOrder(product?._id)} variant='outlined' color='secondary'>Approved</Button>
                                            <Button onClick={() => handleCancelOrder(product?._id)} variant='outlined' color='error'>Delete</Button>
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

export default ManageOrders;
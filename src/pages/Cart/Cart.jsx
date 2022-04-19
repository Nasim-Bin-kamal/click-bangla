import { Button, Container, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity, clearCart, getTotal } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import MyButton from '../../components/StyledComponents/MyButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch]);

    return (
        <div>
            <Header />
            <Container>
                {
                    cart?.cartItems?.length === 0 ? (
                        <Box sx={{ my: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography variant='h5' sx={{ pb: 2 }}>
                                YOUR CART IS EMPTY GO BACK TO SHOPPING
                            </Typography>
                            <Link to="/shop" style={{ textDecoration: 'none' }}>
                                <MyButton>
                                    <ArrowBackIcon sx={{ mr: 2 }} />  Shop
                                </MyButton>
                            </Link>
                        </Box>
                    ) : (
                        <div>
                            <Typography variant='h4' sx={{ mx: 'auto', mt: 14, mb: 5, textAlign: 'center' }}>
                                Shopping Cart : {cart?.cartItems?.length}
                            </Typography>

                            <Grid container spacing={2}>
                                {/* <Grid item xs={12} md={12} lg={9} sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                                    <Paper sx={{
                                        mx: 'auto',
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between', alignItems: 'center',
                                        backgroundColor: '#daf8dac2'
                                    }}>
                                        <Typography variant='h6' sx={{ mx: 'auto' }}>Product</Typography>
                                        <Typography variant='h6'>Price</Typography>
                                        <Typography variant='h6'>Quantity</Typography>
                                        <Typography variant='h6'>Total</Typography>
                                    </Paper>
                                </Grid> */}
                                {
                                    cart?.cartItems?.map((product) => (
                                        <Grid key={product?._id} item xs={12} md={12} lg={12} sx={{ mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                                            <Paper sx={{
                                                mx: 'auto',
                                                p: 2,
                                                display: { sm: 'flex' },
                                                justifyContent: 'space-between', alignItems: 'center',
                                                backgroundColor: '#daf8dac2'
                                            }}>
                                                <Box sx={{
                                                    width: { xs: '100%', sm: '15%', md: '10%', lg: '10%' }
                                                }}>
                                                    <img src={product?.image} alt="" width='100%' />

                                                    <Typography variant='h6' sx={{ py: 1 }}>
                                                        {product?.name}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ px: 1, display: 'flex', justifyContent: 'center', border: '2px solid green', borderRadius: '5px' }}>
                                                    <IconButton onClick={() => dispatch(addToCart(product))}>
                                                        <AddCircleIcon />
                                                    </IconButton>
                                                    <Typography variant='h6' sx={{ mx: 1, py: 1 }}>
                                                        {product?.quantity} Kg
                                                    </Typography>
                                                    <IconButton onClick={() => dispatch(decreaseQuantity(product))}>
                                                        <RemoveCircleIcon />
                                                    </IconButton>
                                                </Box>

                                                <Typography variant='h6' sx={{ py: 1, display: 'flex', justifyContent: 'center' }}>
                                                    {product?.price * product?.quantity} Tk
                                                </Typography>
                                                <IconButton title="Remove Item" onClick={() => dispatch(removeFromCart(product))} >
                                                    <CancelIcon
                                                        sx={{ fontSize: '40px' }} />
                                                </IconButton>
                                            </Paper>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                            <Box sx={{
                                mx: 'auto', my: 3, display: { sm: 'flex' },
                                justifyContent: 'space-between', alignItems: 'center',
                            }}>
                                <Button
                                    onClick={() => dispatch(clearCart())}
                                    variant='contained'
                                    color='error'
                                    sx={{ my: 2 }}>
                                    Clear Cart
                                    <DeleteForeverIcon />
                                </Button>
                                <Typography variant='h6'>
                                    Subtotal: {cart?.cartTotalAmount} Tk
                                </Typography>
                                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                                    <MyButton sx={{ my: 3 }}>
                                        Proceed To Checkout
                                        <ArrowForwardIcon sx={{ ml: 1 }} />
                                    </MyButton>
                                </Link>
                            </Box>

                        </div>
                    )
                }

            </Container>
            <Footer />
        </div>
    );
};

export default Cart;
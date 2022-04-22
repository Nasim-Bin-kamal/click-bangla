import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MyButton from '../../components/StyledComponents/MyButton';
import useAuth from '../../hooks/useAuth';
import { getTotal } from '../../redux/slices/cartSlice';
import { addOrder } from '../../redux/slices/orderSlice';
import { clearCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from "react-toastify";





const useStyles = makeStyles({
    orderForm: {
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '15px',
        backgroundColor: '#E2F3DD',
        borderRadius: '10px'
    },
    totalSection: {
        backgroundColor: '#E2F3DD',

    },
    inputField: {
        padding: '15px 15px',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '20px',
        fontFamily: 'inherit',
        fontSize: '16px'


    }
})



const Checkout = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const key = process.env.REACT_APP_STRIPE_KEY


    async function handleToken(token, addresses) {
        const response = await axios.post(
            "http://localhost:5000/checkout",
            { token, ...cart?.cartItems, subtotal }
        );

        console.log(response.status)

        if (response.status === 200) {
            dispatch(clearCart());
            toast.success(`Payment Successful.Please Check Your Email`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        } else {
            toast.success(`Error!!Something Went Wrong`, {
                position: "bottom-left",
                autoClose: 2000,
            });
        }
    }

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch]);

    const { orderForm, inputField } = useStyles();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        data.orderStatus = 'Pending';
        data.totalAmount = subtotal;
        data.orderDate = new Date().toLocaleDateString();
        data.orderedProduct = [...cart?.cartItems];
        dispatch(addOrder(data));
        // dispatch(clearCart());
        console.log(data);
        reset();

    }

    console.log(errors);

    const shipping = cart?.cartTotalAmount > 200 ? 80 : 40;
    const tax = cart?.cartTotalAmount * 0.05;
    const subtotal = Math.ceil((cart?.cartTotalAmount + shipping + tax));

    return (
        <div>
            <Header />
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', my: 5, textAlign: 'center' }}>
                    To Complete Order Fill The desired Field
                </Typography>
                <Grid container spacing={2} sx={{ mb: 10 }}>

                    <Grid item xs={12} md={12} lg={8}>
                        <Box sx={{ mx: 'auto' }}>

                            <form onSubmit={handleSubmit(onSubmit)} className={orderForm}>
                                <Typography variant='h6' sx={{ mx: 'auto', mb: 3 }}>
                                    Order Information
                                </Typography>
                                <input className={inputField} type="text" placeholder="Customer Name" {...register("customerName", { required: true, maxLength: 80 })} value={user?.displayName || ""} readOnly />
                                <input className={inputField} type="email" placeholder="Email" {...register("email", { required: true })} value={user?.email || ""} readOnly />
                                <input className={inputField} type="text" placeholder="Phone" {...register("phone", { required: true })} />
                                <textarea className={inputField} placeholder="Address" rows="5" {...register("address", { required: true })} />
                                <MyButton type="submit" >
                                    Confirm Order
                                </MyButton>
                            </form>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12} lg={4}>
                        <Box sx={{ mx: 'auto', p: 3, borderRadius: '10px', backgroundColor: '#E2F3DD' }}>
                            <Typography variant='h6' sx={{ mx: 'auto', mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <span>Total Price:</span> <span>{cart?.cartTotalAmount} Tk</span>
                            </Typography>
                            <Typography variant='h6' sx={{ mx: 'auto', mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <span>Shipping:</span> <span>{shipping} Tk</span>
                            </Typography>
                            <Typography variant='h6' sx={{ mx: 'auto', mb: 2, display: 'flex', justifyContent: 'space-between' }}>
                                <span>Tax(5%):</span> <span>{tax} Tk</span>
                            </Typography>
                            <hr />
                            <Typography variant='h6' sx={{ mx: 'auto', mb: 2, color: '#1BAB42', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Subtotal:</span> <span>{subtotal} Tk</span>
                            </Typography>
                            <Box>

                                <StripeCheckout
                                    name="Click Bangla Payment"
                                    billingAddress
                                    shippingAddress
                                    description={`Your Total is ${subtotal} Tk`}
                                    currency='BDT'
                                    amount={subtotal * 100}
                                    token={handleToken}
                                    stripeKey={key}
                                >
                                    <MyButton sx={{ width: '100%' }}>Checkout</MyButton>
                                </StripeCheckout>


                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
            <Footer />
        </div >
    );
};

export default Checkout;
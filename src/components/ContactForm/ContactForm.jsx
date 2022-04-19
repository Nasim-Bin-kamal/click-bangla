import { Container, Grid, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import React from 'react';
import MyButton from '../StyledComponents/MyButton';


const ContactForm = () => {

    const style = {
        margin: 'auto',
        width: '100%',
        padding: '16px',
        border: 'none',
        boxSizing: 'border-box',
        borderRadius: '5px',
        backgroundColor: '#F4F4F4',
        fontFamily: 'inherit',
        fontWeight: 500
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div style={{ backgroundColor: '#FFF8F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container>
                <Box sx={{ mx: 'auto', pt: 5 }}>
                    <Typography variant="h4" sx={{ mx: 'auto', py: 10, textAlign: 'center', fontWeight: 500 }}>
                        Contact With Us
                    </Typography>
                    <Box sx={{ mb: 10 }}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{ margin: 'auto', maxWidth: 550 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} lg={6}>
                                    <input style={style} type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <input style={style} type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <input style={style} type="text" placeholder="Email Address" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6}>
                                    <input style={style} type="tel" placeholder="Phone number" {...register("phone", { required: true, maxLength: 12 })} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12}>
                                    <textarea style={style} placeholder="Your Message" rows="5" {...register("message", { required: true })} />
                                </Grid>
                            </Grid>

                            <MyButton type="submit" sx={{ my: 2, mx: 'auto', display: 'flex', alignItems: 'center' }}>Send Message</MyButton>
                        </form>
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default ContactForm;
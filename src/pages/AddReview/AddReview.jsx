import { Container, Rating, Typography, Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import MyButton from '../../components/StyledComponents/MyButton';
import useAuth from '../../hooks/useAuth';
import { addReview } from '../../redux/slices/productSlice';


const style = {
    width: '100%',
    borderRadius: '5px',
    fontFamily: 'inherit',
    border: 'none',
    padding: '10px',
    fontSize: '15px',
    fontWeight: 500


}




const AddReview = () => {
    const { user } = useAuth();

    const [ratingValue, setRatingValue] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    console.log(errors);

    const onSubmit = data => {
        data.name = user?.displayName;
        data.email = user?.email;
        data.customerImage = user?.photoURL
        data.rating = ratingValue;
        dispatch(addReview(data));
        reset();

    }

    // console.log(value);

    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', my: 5, textAlign: 'center' }}>
                    Please make a review
                </Typography>

                <Box sx={{ mx: 'auto', maxWidth: '500px' }}>
                    <Paper sx={{ p: 2, backgroundColor: '#E2F3DD' }}>
                        <form className='reviewForm' onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                            <Typography variant='h5'>Add Rating</Typography>
                            <Rating
                                sx={{ my: 3 }}
                                name="hover-feedback"
                                value={ratingValue}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }}
                                size='large' />
                            <textarea style={style} placeholder="Write Review" {...register("review", { required: true })} rows={5} />
                            <MyButton type="submit" sx={{ mt: 2 }}>
                                Submit Review
                            </MyButton>
                        </form>
                    </Paper>
                </Box>



            </Container>
        </div>
    );
};

export default AddReview;
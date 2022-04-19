import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form'
import MyButton from '../../components/StyledComponents/MyButton';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/slices/productSlice';


const useStyles = makeStyles({
    addForm: {
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '15px',
        backgroundColor: '#E2F3DD',
        borderRadius: '10px'
    },
    inputField: {
        padding: '15px 15px',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '20px',
        width: '100%',

    }
})

const AddProducts = () => {
    const { addForm, inputField } = useStyles();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(addProduct(data));
        reset();

    }

    console.log(errors);


    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', my: 5, textAlign: 'center', color: '#1BAB42' }}>
                    Add A Product
                </Typography>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)} className={addForm}>
                        <input className={inputField} type="text" placeholder="Product Name" {...register("name", { required: true, maxLength: 80 })} />
                        <input className={inputField} type="text" placeholder="Price" {...register("price", { required: true })} />
                        <input className={inputField} type="text" placeholder="Image Url" {...register("image", { required: true })} />

                        <MyButton type="submit">Add Product</MyButton>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddProducts;
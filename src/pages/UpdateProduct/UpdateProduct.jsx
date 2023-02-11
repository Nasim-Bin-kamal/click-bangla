import { Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MyButton from '../../components/StyledComponents/MyButton';
import { updateProduct } from '../../redux/slices/productSlice';


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

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addForm, inputField } = useStyles();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {

        const proceed = window.confirm('Are you want to update this product');
        if (proceed) {
            dispatch(updateProduct(data));
        }



    }

    return (
        <div>
            <Container>
                <Grid container sx={{ m: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant='h4'>
                            Edit Product
                        </Typography>
                    </Grid>
                    <Grid item>
                        <MyButton onClick={() => navigate('/dashboard/manage-products')}>Back To Manage Products</MyButton>
                    </Grid>
                </Grid>
                <Box sx={{ mx: 'auto', my: 5 }}>
                    <form onSubmit={handleSubmit(onSubmit)} className={addForm}>
                        <input className={inputField} type="text" placeholder="Product Name" {...register("name", { required: true, maxLength: 80 })} />
                        <input className={inputField} type="text" placeholder="Price" {...register("price", { required: true })} />
                        <input className={inputField} type="text" placeholder="Image Url" {...register("image", { required: true })} />
                        <select className={inputField} {...register("category")}>
                            <option >Select Category</option>
                            <option value="vegetable">Vegetable</option>
                            <option value="fruit">Fruit</option>
                        </select>
                        <MyButton type="submit">Add Product</MyButton>
                    </form>
                </Box>
            </Container>
        </div >
    );
};

export default UpdateProduct;
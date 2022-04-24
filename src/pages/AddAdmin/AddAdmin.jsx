import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import MyButton from '../../components/StyledComponents/MyButton';

const useStyles = makeStyles({
    adminForm: {
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


const AddAdmin = () => {
    const { adminForm, inputField } = useStyles();

    const [email, setEmail] = useState('');


    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const successNotify = () => {
        toast.success('Admin created successfully!!', {
            position: 'top-center',
            autoClose: 2000
        });
    }

    const errorNotify = () => {
        toast.error('Admin can not created or already an admin', {
            position: 'top-center',
            autoClose: 3000
        });
    }

    const handleSubmitAdmin = (e) => {
        const user = { email };
        e.preventDefault();
        fetch('https://polar-plains-17916.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    successNotify();
                }
                else {
                    errorNotify();
                }
                e.target.reset();
            });
    }


    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', my: 5, textAlign: 'center', color: '#1BAB42' }}>
                    Add An Admin
                </Typography>
                <Box>
                    <form className={adminForm} onSubmit={handleSubmitAdmin}>
                        <TextField
                            sx={{ mx: 'auto', my: 3, backgroundColor: '#fff' }}
                            onBlur={handleOnBlur}
                            fullWidth
                            name='email'
                            type='email'
                            label="Admin Email"
                            id="fullWidth" />

                        <MyButton type="submit">Submit</MyButton>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddAdmin;

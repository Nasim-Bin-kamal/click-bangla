import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import MyButton from '../StyledComponents/MyButton';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [registerData, setRegisterData] = useState({});
    const { signInWithGoogle, registerUser, errorMsg } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const newRegisterData = { ...registerData };
        newRegisterData[e.target.name] = e.target.value;
        setRegisterData(newRegisterData);

    }
    console.log(registerData);

    const handleSubmitRegistration = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            alert('Password did not match');
            return;
        }

        registerUser(registerData?.email, registerData?.password, registerData?.name, location, navigate)

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }

    return (
        <div>
            <Container sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ mx: 'auto', my: 10, p: 2, maxWidth: 380, backgroundColor: '#E2F3DD', borderRadius: 3 }}>
                    <Typography variant="h4" sx={{ m: 'auto', pb: 3, textAlign: 'center', color: '#1BAB42' }}>
                        Register Please
                    </Typography>
                    {
                        errorMsg && <Alert sx={{ my: 3 }} severity="error" dismissible >{errorMsg}</Alert>
                    }
                    <form onSubmit={handleSubmitRegistration}>
                        <TextField
                            onBlur={handleOnBlur}
                            name="name"
                            type="text"
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            size="small"
                            margin="dense"
                            required
                            sx={{ backgroundColor: '#fff' }} />
                        <TextField
                            onBlur={handleOnBlur}
                            name="email"
                            type="email"

                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            margin="dense"
                            required
                            sx={{ backgroundColor: '#fff' }} />
                        <TextField
                            onBlur={handleOnBlur}
                            name="password"

                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth size="small"
                            margin="dense"
                            sx={{ backgroundColor: '#fff' }} />
                        <TextField
                            onBlur={handleOnBlur}
                            name="password2"

                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            fullWidth size="small"
                            margin="dense"
                            sx={{ backgroundColor: '#fff' }} />
                        <MyButton type="submit" sx={{ my: 2, mx: 'auto', width: '100%', display: 'flex' }}>Register</MyButton>
                    </form>
                    <Box sx={{ mx: 'auto', mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ my: 2 }}>Or Register With</Typography>
                        <Button onClick={handleGoogleSignIn} variant="outlined" sx={{ borderRadius: 8, px: 3 }}>
                            <GoogleIcon sx={{ mr: 2 }} />
                            Continue With Google
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Already have an account? <NavLink style={{ color: '#1BAB42', fontWeight: 500 }} to="/login">Login</NavLink>
                        </Typography>


                    </Box>
                </Box>
            </Container>
        </div >
    );
};

export default Register;
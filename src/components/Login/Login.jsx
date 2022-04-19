import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MyButton from '../StyledComponents/MyButton';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setActiveUser, setUserLogOut, selectUserName, selectUserEmail } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    // const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();
    // const dispatch = useDispatch();
    // const userName = useSelector(selectUserName)
    // const userEmail = useSelector(selectUserEmail)

    // const handleGoogleSingIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             dispatch(setActiveUser({
    //                 userName: result.user.displayName,
    //                 userEmail: result.user.email
    //             }))
    //         })
    // }
    const { signInWithGoogle, userSignIn, errorMsg } = useAuth();

    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSingIn = () => {
        signInWithGoogle(location, navigate);
    }
    const handleOnBlur = (e) => {
        const newLoginData = { ...loginData };
        newLoginData[e.target.name] = e.target.value;
        setLoginData(newLoginData);

    }
    console.log(loginData);

    const handleUserLogin = (e) => {
        e.preventDefault();
        userSignIn(loginData?.email, loginData?.password, location, navigate);
    }
    return (
        <div>
            <Container sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ mx: 'auto', my: 10, p: 2, maxWidth: 380, backgroundColor: '#E2F3DD', borderRadius: 3 }}>
                    <Typography variant="h4" sx={{ m: 'auto', pb: 3, textAlign: 'center', color: '#1BAB42' }}>
                        Login Please
                    </Typography>
                    {
                        errorMsg && <Alert sx={{ my: 3 }} severity="error" dismissible >{errorMsg}</Alert>
                    }
                    <form onSubmit={handleUserLogin}>
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
                            fullWidth
                            size="small"
                            margin="dense"
                            required
                            sx={{ backgroundColor: '#fff' }} />

                        <MyButton type="submit" sx={{ my: 2, mx: 'auto', width: '100%', display: 'flex' }}>Login</MyButton>
                    </form>
                    <Box sx={{ mx: 'auto', mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ my: 2 }}>Or Login With</Typography>
                        <Button onClick={handleGoogleSingIn} variant="outlined" sx={{ borderRadius: 8, px: 3 }}>
                            <GoogleIcon sx={{ mr: 2 }} />
                            Continue With Google
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Don't have an account? <NavLink style={{ color: '#1BAB42', fontWeight: 500 }}
                                to="/register">Create an account</NavLink>
                        </Typography>


                    </Box>
                </Box>
            </Container>
        </div >
    );
};

export default Login;
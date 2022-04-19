import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation()
    if (isLoading) {
        return (
            <Box sx={{ my: 15, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
        )
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />

};

export default PrivateRoute;
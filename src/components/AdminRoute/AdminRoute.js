import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();

    if (isLoading) {

        return (
            <Box sx={{ my: 15, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Box>
        )

    }

    // if (user?.email && admin) {
    //     return children
    // }
    // return <Navigate to="/dashboard" state={{ from: location }} />
    return user?.email && admin ? children : (<Navigate to="/login" state={{ from: location }} />)
};

export default AdminRoute;
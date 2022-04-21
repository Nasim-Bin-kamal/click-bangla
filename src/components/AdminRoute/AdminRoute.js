import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center my-5 loading">
                <Spinner className="" animation="grow" variant="danger" />
                <Spinner className="" animation="grow" variant="warning" />
                <Spinner className="" animation="grow" variant="success" />
            </div>
        )
    }

    // if (user?.email && admin) {
    //     return children
    // }
    // return <Navigate to="/dashboard" state={{ from: location }} />
    return user?.email && admin ? children : (<Navigate to="/login" state={{ from: location }} />)
};

export default AdminRoute;
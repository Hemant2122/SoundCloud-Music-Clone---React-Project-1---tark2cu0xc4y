import React from 'react'
import useUser from '../../CustomHook/useUser';
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const { children } = props;
    
    const { getToken } = useUser();

    if(getToken) {
        return <>{ children }</>;
    }else {
        return <Navigate to={"/login"} />;
    }
}

export default ProtectedRoute;
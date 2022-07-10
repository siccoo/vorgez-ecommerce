import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux/hooks';
import { verifyJwt } from '../authSlice';

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
    const { isSuccess, isAuthenticated, jwt } = useAppSelector((state) => state.auth);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!jwt || !jwt?.token) return;

        dispatch(verifyJwt(jwt.token));
    }, [jwt, isSuccess])

    return isAuthenticated;
}

export default PrivateRoute
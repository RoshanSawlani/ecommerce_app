import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Spinner';

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            try {
                if (auth?.token) {
                    const res = await axios.get('/api/v1/auth/user-auth');
                    if (res.data.ok) {
                        setOk(true);
                    } else {
                        setOk(false);
                    }
                }
            } catch (error) {
                console.error("Error in authCheck:", error);
                setOk(false); // Set ok to false if there's an error
            }
        };
        authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}

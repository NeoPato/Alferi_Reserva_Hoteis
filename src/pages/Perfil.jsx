import React, { useState, useEffect } from 'react';
import Menu from '../components/menu';
import { api } from '../lib/server';

function Perfil() {
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem('user');
        setUserId(userId);

        if (!userId) {
            setLoading(false);
            return;
        }

        api
            .get(`/users/${userId}`)
            .then(response => {
                console.log("Login successful. User ID:", userId);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching user data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userId) {
        return <div>User not found</div>;
    }

    return (
        <div>
            <Menu />
            <h1>Usuário</h1>
            <p>ID: {userId}</p>
        </div>
    );
};

export default Perfil;

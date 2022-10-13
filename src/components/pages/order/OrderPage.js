import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function OrderPage() {

    const navigate = useNavigate();
    const params = useParams()

    const handleOnClick = useCallback(() => navigate('/', { replace: true }), [navigate]);

    return (
        <div>
            <h1>Bonjour {params.name}</h1>
            <button onClick={handleOnClick}>Déconnexion</button>
        </div>
    )
}
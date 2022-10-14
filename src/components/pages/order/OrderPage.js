import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function OrderPage() {

    const navigate = useNavigate();
    const params = useParams()


    const handleOnClick = () => navigate('/', { replace: true })

    return (
        <div>
            <h1>Bonjour {params.name}</h1>
            <button onClick={handleOnClick}>Déconnexion</button>
        </div>
    )
}
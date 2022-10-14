import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function OrderPage() {

    const navigate = useNavigate();
    const {name} = useParams()


    const handleClick = () => navigate('/', { replace: true })

    return (
        <div>
            <h1>Bonjour {name}</h1>
            <button onClick={handleClick}>Déconnexion</button>
        </div>
    )
}
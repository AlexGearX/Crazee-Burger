import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

    const navigate = useNavigate();

    const handleOnClick = () => navigate('/', { replace: true })

    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleOnClick}>Retourner à la page d'accueil</button>
        </div>
    )
}
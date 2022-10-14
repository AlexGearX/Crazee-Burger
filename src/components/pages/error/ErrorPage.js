import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

    const navigate = useNavigate();

    const handleClick = () => navigate('/', { replace: true })

    return (
        <div>
            <h1>ErrorPage</h1>
            <button onClick={handleClick}>Retourner à la page d'accueil</button>
        </div>
    )
}
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const navigate = useNavigate();

    //state
    const [name, setName] = useState("");
    // comportements
    const handleSubmit = useCallback(() => navigate("/order/" + name, { replace: true }, [navigate]));

    const handleChange = (event) => {
        setName(event.target.value);
    }
    //render
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                value={name}
                type="text"
                placeholder="Entrez votre prénom..."
                onChange={handleChange}
                required>
            </input>
            <button>Accéder à votre espace</button>
        </form>
    )
}

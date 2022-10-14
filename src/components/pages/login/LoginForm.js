import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

    const navigate = useNavigate();
    const [name, setName] = useState("");


    const handleSubmit = () => navigate(`/order/${name}`, { replace: true })

    const handleChange = (event) => setName(event.target.value)


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

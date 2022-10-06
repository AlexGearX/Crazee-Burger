import React, { useState } from 'react'

export default function LoginForm() {

    //state
    const [prenom, setPrenom] = useState("");

    // comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Bonjour " + prenom);
        setPrenom("");
    };

    const handleChange = (event) => {
        setPrenom(event.target.value);
    }
    //render
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                value={prenom}
                type="text"
                placeholder="Entrez votre prénom..."
                onChange={handleChange}
                required>
            </input>
            <button>Accéder à votre espace</button>
        </form>
    )
}

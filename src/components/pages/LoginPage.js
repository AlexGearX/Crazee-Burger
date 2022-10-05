import { useState } from "react";
export default function LoginPages() {

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
        <div>
            <h1>Bienvenue chez nous !</h1>
            <br></br>
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={prenom} type="text" placeholder="Entrez votre prénom..." onChange={handleChange} required></input>
                <button>Accéder à votre espace</button>
            </form>
        </div>
    );
};
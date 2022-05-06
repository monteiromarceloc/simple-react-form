import { useState } from "react";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           // ...
            
        } catch (error) {
            // ...
        }
    }

    return (
        <div className="App-page" >
            <form className='center-form' >
                <h4>Valide sua senha</h4>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nome"
                    value={name}
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    value={email}
                    autoFocus
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Senha"
                    value={password}
                />
                {
                    // error test
                }
                <button className="home-button" onClick={handleSubmit} id='sign-in-button'>Enviar</button>
            </form>
        </div>
    );
}

export default Home;

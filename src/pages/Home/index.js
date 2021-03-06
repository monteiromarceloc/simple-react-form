import React, { useState } from "react";
import { sendData } from "../../services/api";
import { validatePassword } from "../../services/validation";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const buttonDisabled = !name || !email || !password || isLoading;

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validatePassword(password, setValidationErrors)) {
            setIsValid(true);
            setSubmitError(false);
            setIsLoading(true);

            try {
                const status = await sendData({ name, email, password });
                if (status !== 201) throw new Error()
                
            } catch (error) {
                console.log(error);
                setSubmitError(true);
            }
            setIsLoading(false);
        }
    }

    return (
        <div className="home_page" >
            <form className='home_form' >
                <h4>Valide sua senha</h4>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nome"
                    value={name}
                    autoFocus
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    value={email}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Senha"
                    value={password}
                />
                {
                    validationErrors.length ? <p className="home_error-message">
                        Senha inv??lida
                        { validationErrors.map(e => <li key={e}>{e}</li>) }
                    </p>
                    : isValid ? <p className="home_sucess-message">Senha v??lida</p>
                    : <></>
                }
                <div className="home_form-row">
                    {
                        (isValid && !isLoading) ? submitError ?
                            <p className="home_error-message">Falha ao enviar resultado. Tente novamente.</p>
                            : <p className="home_sucess-message">Resultado enviado com sucesso!</p>
                        : <></>
                    }

                    <button className={`home_button ${buttonDisabled ? 'disabled' : ''}`} onClick={handleSubmit} disabled={buttonDisabled} type="button" >
                        {
                            isLoading ? <div className="loader">Loading</div>
                            : "Enviar"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Home;

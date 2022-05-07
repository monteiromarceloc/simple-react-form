import { useState } from "react";
import { hasGrowingNumbers, hasSameNumberTwice } from "../../utils/validators";

function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const validatePassword = () => {
        let errors = [];
        if (!password.match(/^[0-9]+$/)) errors.push("A senha deve conter apenas números");
        if (password.length !== 6) errors.push("A senha deve conter 6 digitos");
        if (password < 184759 || password > 856920) errors.push("A senha deve estar entre os numeros 184759 e 856920"); // A menor senha possível é 222222
        if(!hasSameNumberTwice(password)) errors.push("A senha deve conter 2 digitos adjacentes iguais");
        if(!hasGrowingNumbers(password)) errors.push("A senha deve conter digitos numa sequencia crescente ou de mesmo valor");

        setValidationErrors(errors);
        return errors.length === 0;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validatePassword()) {
            // API call
            setIsValid(true);
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                };
                const data = await fetch('https://61e036950f3bdb0017934eb0.mockapi.io/api/valid-passwords/result', requestOptions)
                if (data.status !== 201) throw new Error()
                
            } catch (error) {
                console.log(error);
                setSubmitError(true);
            }
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
                        Senha inválida
                        { validationErrors.map(e => <li>{e}</li>) }
                    </p>
                    : isValid ? <p className="home_sucess-message">Senha válida</p>
                    : <></>
                }
                <div className="home_form-row">
                    {
                        submitError &&
                        <p className="home_error-message">Falha ao enviar resultado. Tente novamente.</p>
                    }
                    <button className="home_button" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Home;

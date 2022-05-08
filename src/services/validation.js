export const validatePassword = (password, setErrors) => {
    let errors = [];
    if (!password.match(/^[0-9]+$/)) errors.push("A senha deve conter apenas números");
    if (password.length !== 6) errors.push("A senha deve conter 6 digitos");
    if (password < 184759 || password > 856920) errors.push("A senha deve estar entre os numeros 184759 e 856920"); // A menor senha possível é 222222
    if(!hasSameNumberTwice(password)) errors.push("A senha deve conter 2 digitos adjacentes iguais");
    if(!hasGrowingNumbers(password)) errors.push("A senha deve conter digitos numa sequencia crescente ou de mesmo valor");

    setErrors(errors);
    return errors.length === 0;
}

const hasSameNumberTwice = (sequence) => {
    let before;
    for (let c of sequence) {
        if (before) {
            if (before == c) return true;
        }
        before = c;
    }
    return false;
}

const hasGrowingNumbers = (sequence) => {
    let before;
    for (let c of sequence) {
        if (before) {
            if (before > c) return false;
        }
        before = c;
    }
    return true;
}
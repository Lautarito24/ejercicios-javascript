//Determina si un número entero es primo.
function esPrimo(numero) {
    if (numero <= 1) {
        return  `${numero}No es un numero primo`;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return `${numero} No es un numero primo`;
        }
    }
    return `${numero} Es un numero primo`;
}
console.log(esPrimo(13));


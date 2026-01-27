function menorNumero(numeros) {
    let menor = numeros[0]

    for (let i in numeros)
        if (numeros[i] < menor)
            menor = numeros[i]

    return menor
}

function menorNumero(numeros) {
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

function menorNumero(numeros) {
    return Math.min(...numeros);
}
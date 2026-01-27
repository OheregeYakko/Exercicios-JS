function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length

    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}

function somarNumeros(numero) {
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}
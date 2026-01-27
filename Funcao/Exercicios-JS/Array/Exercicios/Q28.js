function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []

    for(numero of numeros) {
        const quantidadeDeDigitos = String(numero).length

        if(quantidadeDeDigitos === quantidadeDesejada)
            resultado.push(numero)
    }

    return resultado
}

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = string(numero).length

        return quantidadeDeDigitos === quantidadeDesejada
    })
}
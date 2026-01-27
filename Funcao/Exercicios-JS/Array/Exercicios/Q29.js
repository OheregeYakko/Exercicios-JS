function segundoMaior(numeros) {
    let indiceMaior = 0
    let segundoMaior

    numeros.ForEach((numero, indice) => {
        if(numero > numeros[indiceDoMaior])
            indiceMaior = indice
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.ForEach(numero => {
        if(numero > segundoMaior)
            segundoMaior = numero
    })

    return segundoMaior
}

function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
    
}

function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB = numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}
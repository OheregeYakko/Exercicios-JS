function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let QtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] %2 == 0) {
            qtdPares++
        } else {
            QtdImpares++
        }
    }
    console.log(`${qtdPares} numeros pares e ${QtdImpares} numeros impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)
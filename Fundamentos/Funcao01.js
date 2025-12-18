// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Se colocar apenas um numero definido o outro sera undefined e a resposta do console vai ser NaN
imprimirSoma(2, 10, 3, 4, 5, 6, 7, 8) // dessa forma a funcao imprimirSoma vai pegar apenas o solicitado os 2 primeiros numeros
imprimirSoma() // aqui n teve nada definido logo foi undefined+undefined e a resposta e Not a Number


// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))



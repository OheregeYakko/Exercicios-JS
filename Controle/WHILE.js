function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max, min) + min
    return Math.floor(valor)
}

let opcao = 7

while (opcao != 6) {
    opcao = getInteiroAleatorioEntre(6, 66)
    console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log("Ate a proxima Cristao!")
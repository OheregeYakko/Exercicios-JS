/* mais informacoes sobre gerar numeros aleatorios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function funcaoDaSorte(numeroEscolhido) {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (numeroEscolhido === numeroAleatorio ?
        `Parabens! O numero sorteado foi o ${numeroAleatorio}` : `Que pena, O numero sorteado foi o ${numeroAleatorio}`
    )
}
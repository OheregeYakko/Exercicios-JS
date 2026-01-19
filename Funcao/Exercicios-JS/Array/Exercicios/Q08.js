function multiplicar(numeroA, numeroB) {
    let resultado = 0
    /* a otimizacao feita para diminuir a quantidade de chamadas
    recursivas pode  ser realizada aqui para diminuir a quantidade loop */
for(let i = 0; i < numeroB; i++)
    resultado += numeroA

return  resultado

}

function multiplicar(numero,  multiplicador) {
    if(numero === 0 || multiplicador === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}

function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0

    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)

    function multiplicarRecursivamente(numero,  multiplicador) {
        return(
            multiplicador === 1 ?
            numero :
            numero + multiplicarRecursivamente(numero, multiplicador-1)
        )
    }

    //nessa versao, garantimos  que   o multiplicador sera o menor  numero,
    //portanto havera  o  minimo de  chamadas recursivas return multiplicadoRecusivamente
    return multiplicarRecursivamente(maiorNumero,  menorNumero)
}
function inverter(objeto) {
    const objetoInvertido = {}

    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
            valor= 1
        
            objetoInvertido [ parChaveValor[Valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )

    return Object.fromEntries(paresDeChaveValorInvertidos)
}
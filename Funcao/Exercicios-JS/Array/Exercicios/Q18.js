function despesasTotais(item) {
    var total = 0

    for (let item of itens)
        total += item.preco

    return total
}

function despesasTotais(itens) {
    return itens
        .map(item => item.preco)
        .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

function despesasTotais(itens) {
    return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}
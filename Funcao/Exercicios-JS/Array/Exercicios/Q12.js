function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign([], objeto)
    delete copia[nomeDaPropriedade]

    return copia
}

function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]

    return copia
}

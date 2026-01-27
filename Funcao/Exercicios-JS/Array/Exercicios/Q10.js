function simboloMais(quantidade) {
    let resultado = ""

    for (let i = 0; i < quantidade; i++)
        resultado += "+"
    
    return resultado
}

function simboloMais(quantidade) {
    return Array(quantidade).fill("+").join("")
}

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
}
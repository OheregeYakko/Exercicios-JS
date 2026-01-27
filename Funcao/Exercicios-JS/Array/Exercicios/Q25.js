function buscarPalavrasSemelhantes(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
        if(palavra.includes(inicio))
            resultado.push(palavra)

    return resultado
}

function buscarPalavraSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}


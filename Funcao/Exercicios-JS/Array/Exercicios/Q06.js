function inverso(valor) {
    const tipo = typeof valor

    if(tipo = "boolean") return !valor
    else if(tipo == "number")  return -valor
    else
        return  `booleano ou numero esperados, mas o parametro e do tipo ${tipo}`
}
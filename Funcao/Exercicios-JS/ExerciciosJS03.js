function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Metodo antigo:
    let resultado = Math.pow(base, expoente)
    //Metodo novo:
    resultado = base ** expoente
    return resultado
}

console.log(expoente(2, 3))
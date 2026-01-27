function contarCaractere(caractereBuscado, frase) {
    let contador = 0

    for (let i = 0; 1 < frase.length; i++)
        if(frase.charAt(i) === caractereBuscado)
            contador++

    return contador
}

function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
}
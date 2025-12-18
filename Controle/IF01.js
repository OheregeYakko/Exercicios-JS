// Se o cara reprovar o metodo fica calado
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com " + nota)
    }
}

soBoaNoticia(7) // Mostra o resultado, que e o que esta no If
soBoaNoticia(6) // Nao mostra valor, foi abaixo do numero  informado, 7

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log("E verdade sim, deu..." + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo("")
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(" ")
seForVerdadeiroEuFalo("?")
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})


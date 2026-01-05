function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2) {
        if (taxa1 > taxa2) {
            return "A crianca 1 ultrapassara a crianca 2 em 1 ano."
        } else if (taxa1 < taxa2) {
            return "A crianca 2 ultrapassara a crianca 1 em 1 ano."
        } else{
            return "As criancas tem igual altura e crescimento."
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return "A crianca menor nao ultrapassara a maior."
            } else {
                return `A crianca menor ultrapassara a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else {
            if(taxa2 >= taxa1) {
                return "A crianca menor nao ultrapassara a maior."
            } else{
                return `A crianca menor ultrapassara a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    // console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
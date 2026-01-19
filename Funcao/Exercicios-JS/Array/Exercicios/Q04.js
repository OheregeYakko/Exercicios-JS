function receberNomeDoMes(numero) {
    switch(numero) {
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "marco";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro"  
    }
}

function   receberNomeDoMes(numero) {
    const mapeamento = ["janeiro", "fevereiro", "marco", "abril", "maio",
        "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

        return mapeamento[--numero];
}
// par nome/valor
const saudacao = "Opa Yago" // contexto lexico 1

function exec() {
    const saudacao = "Falaaa Pae" // contexto 2
    return saudacao
}

// Objetos sao grupos animnhados de pares Nome/Valor
const cliente = {
    nome: "Yago",
    idade: 31,
    peso: 85,
    endereco: {
        logradouro: "Rua Joao Rodrigues",
        numero: 219
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
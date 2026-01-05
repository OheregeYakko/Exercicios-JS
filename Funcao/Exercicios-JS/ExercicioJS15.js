function escolheCarro (modelo) {
    switch (modelo) {
        case "hatch":
            return "Compra efetuada com sucesso."
        case "sedan":
        case "motocicletas":
        case "caminhonete":
            return "Tem certeza que nao prefere este modelo?"
        default:
            return "Nao trabalhamos com este tipo de automovel aqui."
    }
}

console.log(escolheCarro("hatch"));
console.log(escolheCarro("motocicleta"));
console.log(escolheCarro("caminhonete"));
console.log(escolheCarro("jetski"));
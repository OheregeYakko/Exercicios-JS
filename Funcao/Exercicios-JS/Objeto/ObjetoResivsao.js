// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira Gamer"
produto ["Marca do Produto"] = "DX Racer Gatinho"
produto.preco = 2.999

console.log(produto)
delete produto.preco
delete produto["Marca do Produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante"
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)
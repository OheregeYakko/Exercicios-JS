function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("PS5", 3.999))
console.log(criarProduto("PC Gamer", 6.999))

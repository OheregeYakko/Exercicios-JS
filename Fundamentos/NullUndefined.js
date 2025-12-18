let valor // nao inicializada, logo vai constar como undefined no console
console.log(valor)

valor = null // ausencia de valor
console.log(valor) // foi iniciada mas n foi apontado para nhm lugar de memoria
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco comando retirar atribuicao de um objeto
console.log(produto)

produto.preco = null
console.log(produto.preco)
console.log(produto)

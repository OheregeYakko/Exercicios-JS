console.log(typeof Object) // funcao 
console.log(typeof new Object) // com o new se torna um objeto

const Cliente = function() {}
console.log(typeof Cliente) // funcao
console.log(typeof new Cliente) // com adicao do new se torna um obejeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // funcao
console.log(typeof new Produto()) // objeto, mais uma vez add new muda para objeto
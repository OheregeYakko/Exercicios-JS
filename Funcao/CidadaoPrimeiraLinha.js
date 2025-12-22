// Funca em JS e First-Class Object (Citizens)
// Higher-Order Function

// criar de forma literal
function fun1() {} // As chaves sao opcional, mas e melhor usar para ficar mais organizado

// Armazenar em uma variavel
const fun2 = function () { }

// Amazenar em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return "Fala galera"}
console.log(obj.falar())

// Passar funcao como parametro
function run(fun) {
    fun()
}

run(function () { console.log("Please Wait...")})

// Uma Funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (e) {
        console.log(a + b * e)
    }
}

soma(2,3)(5) // Primeiro vem a multiplicacao depois a soma, logo 5 vezes 3 mais 2
const cincoMais = soma(2, 3)
cincoMais(5)
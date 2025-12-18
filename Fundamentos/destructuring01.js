const pessoa = {
    nome: "Silvia",
    idade: 33,
    endereco: {
        logradouro: "Rua Joao Rodrigues",
        numero: 219
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: {ag, num}} = pessoa // vai dar erro pq n ha definicao para ag ou num
console.log(ag, num)
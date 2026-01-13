const alunos = [
    {nome: 'Draven', nota: 7.3, bolsista: false},
    {nome: 'Ashe', nota: 9.2, bolsista: true},
    {nome: 'Darius', nota: 9.8, bolsista: false},
    {nome: 'Sejuani', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos sao Bolsistas? Nao!
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno e bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
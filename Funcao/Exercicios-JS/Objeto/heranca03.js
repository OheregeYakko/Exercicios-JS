const pai = { nome: "Peter", corCabelo: "Verde"}

const filha1 = Object.create(pai)
filha1.nome = "Mary"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Felicia", writable: false, enumerable: true}
})
console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} esta com o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por heranca: ${key}`)
}

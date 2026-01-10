function Aula(nome, VideoID) {
    this.nome = nome
    this.videoID = VideoID
}

const aula1 = new Aula("Bem vindo cordeiros", 123)
const aula2 = new Aula("Ides em Paz", 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, "Entrei na casa de deus", 123)
const aula4 = novo(Aula, "Ides em paz que o senhor vos acompanhe", 456)
console.log(aula3, aula4)
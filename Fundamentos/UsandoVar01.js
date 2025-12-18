{
    {
        {
            {
                var sera = 'nani???' // criamos uma variavel num bloco que n e uma funcao, fora dessa variavel ela e visiel
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() { // criamos uma variavel  dentro do escopo da funcao ela so e visivel dentro da funcao
    var local = 123
    console.log(local)
}

teste()
console.log(local) // aqui n da certo

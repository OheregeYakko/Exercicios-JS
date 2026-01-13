const players = ["Brtt", "Mica0", "ManaJJ", "Titan"]
players.pop() // titan traiu mais uma namorada!
console.log(players)

players.push("Matsukaze")
console.log(players)

players.shift() // remove o maior adc!
console.log(players)

players.unshift("Route")
console.log(players)

// splice pode adicionar e remover elementos

// adicionar
players.splice(2, 0, "Brance", "Titan")
console.log(players)

// remover
players.splice(3, 1) // titan traiu de novo :(
console.log(players)

const algunsPlayers1 = players.slice(2) // novo array
console.log(algunsPlayers1)

const algunsPlayers2 = players.slice(1, 4)
console.log(algunsPlayers2) // Note que o 4 n foi, apenas do 1 ao 3
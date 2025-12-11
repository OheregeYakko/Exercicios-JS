const escola = "Cod3r"

console.log(escola.charAt(4)) // vai mostrar a letra r do nome na const
console.log(escola.charAt(5)) // n vai encontrar a letra e mostrar resultado vazio
console.log(escola.charCodeAt(3)) // mostrou o valor do caractere de forma universal
console.log(escola.indexOf('3')) // mostra a letra, que no caso e um numero o mesmo do solicitado

console.log(escola.substring(1)) // mostra as letras a partir do 1, sendo que zero e o C por tanto n mostra
console.log(escola.substring(0, 3)) // mostra as letras do comeco mas n mostra a partir da letra 3

console.log('Escola '.concat(escola).concat("!")) // 
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro.'.split(','))
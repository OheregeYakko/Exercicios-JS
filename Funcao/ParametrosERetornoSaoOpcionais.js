function area(largura, altura) {
    const area = largura * altura
    if (area >20) {
        console.log(`Pode nao man, ta alto demais: ${area}m2.`) // sempre usar crase (botao do antigo aspas) para Cifrao
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))
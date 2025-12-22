function Pessoa() {
    this.idade = 0

// outra forma tbm valida: const self = this, retirar o .bind(this)
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa 
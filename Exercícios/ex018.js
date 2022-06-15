let amigo = {nome: 'Paula', sexo: 'F', peso: 70.5, 
engordar(p = 0){
    console.log('Engordou...')
    this.peso += p
}}
amigo.engordar(3)
console.log(amigo)
let num = [5, 9, 6, 3, 10]
num[5] = 20 //ADICIONA VALOR EM LUGAR ESPECÍFICO
num.push(15) //ADICIONA VALOR NA ÚLTIMA POSIÇÃO

console.log(`Vetor: ${num}`)
console.log(`Tamanho do vetor: ${num.length}`)

//num.length = TAMANHO DO VETOR

num.sort() //ORDENA O VETOR DE FORMA CRESCENTE

console.log(`Vetor ordenado: ${num}`)



let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let pos = 0; pos <= vet.length; pos++){
    console.log(`A posição ${pos} tem o valor: ${vet[pos]}`)
}


//FORMA SIMPLIFICADA USANDO ECMAScript
for(let pos in vet){
    console.log(`A posição ${pos} tem o valor: ${vet[pos]}`)
}

let pos = vet.indexOf(6) //PESQUISA O VALOR INDICADO
console.log(`O valor 6 está na posição ${pos}`)
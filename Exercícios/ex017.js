//FUNÇÃO COM PARÂMETRO
function parimp(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

console.log(parimp(50))

//FUNÇÃO COM VÁRIOS PARÂMETROS
function soma(n1, n2){
    return n1 + n2
}

console.log(soma(8, 10))

//FUNÇÃO DENTRO DE VARIÁVEL
let v = function(x){
    return x*2
}

console.log(v(10))

//FATORIAL
function fatorial(f){
    let fat = 1
    for(let c = f; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

//RECURSIVIDADE (FATORIAL)
function rescursiva(r){
    if(r == 1){
        return 1
    }else{
        return r * rescursiva(r-1)
    }
}

console.log(rescursiva(5))
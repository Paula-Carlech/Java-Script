function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/bebe_homem.png')
            }else if(idade <= 29){
                img.setAttribute('src', 'images/jovem_homem.png')
            }else if(idade <= 50){
                img.setAttribute('src', 'images/adulto_homem.png')
            }else{
                img.setAttribute('src', 'images/idoso_homem.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/bebe_mulher.png')
            }else if(idade <= 29){
                img.setAttribute('src', 'images/jovem_mulher.png')
            }else if(idade <= 50){
                img.setAttribute('src', 'images/adulto_mulher.png')
            }else{
                img.setAttribute('src', 'images/idoso_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
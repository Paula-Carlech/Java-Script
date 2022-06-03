function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        imagem.src = 'images/manha.png'
        document.body.style.background = '#FFD162'
    }else if(hora >= 12 && hora <= 18){
        imagem.src = 'images/tarde.png'
        document.body.style.background = '#FBAD69'
    }else{
        imagem.src = 'images/noite.png'
        document.body.style.background = '#0A2548'
    }
}
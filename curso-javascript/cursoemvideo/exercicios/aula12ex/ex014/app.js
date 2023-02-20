function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png.jpg'
        document.body.style.background = '#90EE90'	
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png.jpg'
        document.body.style.background = '#FF7F50'
    } else {
        img.src = 'noite.png.jpg'
        document.body.style.background = '#363636'
    }
}

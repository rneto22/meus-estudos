function analisar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    if (anonasc.value.length = 0 || (anonasc.value) > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-h.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-h.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-h.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
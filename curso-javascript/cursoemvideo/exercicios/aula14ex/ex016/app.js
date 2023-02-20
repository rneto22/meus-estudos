function contagem() {
    var inicio = window.document.getElementById('nInicial')
    var fim = window.document.getElementById('nFim')
    var passo = window.document.getElementById('nPassos')
    var res = window.document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO]FALTAM DADOS')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var g = Number(passo.value)
        
        if (g == 0) {
            window.alert('[ERRO] Iniciando pelo passo 1')
            g = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += g) {
                res.innerHTML += `${c} \u{1F449} `
        }
        } else {
            for (var c = i; c >= f; c -= g) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    }

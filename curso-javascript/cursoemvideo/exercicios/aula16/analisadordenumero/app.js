    let num = document.getElementById('txtn')
    let valtab = document.getElementById('valadd')
    let res = document.getElementById('res')
    var lista = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, lista)) {
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        valtab.appendChild(item)
    } else {
        window.alert('Valor invalido ou já presente na lista')
    }
    num.value = ''
    num.focus()
}
function Finalizar() {
        if (lista.length == 0) {
            window.alert('Adicione valores antes de finalizar')
        } else {
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for (let pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior)
            maior = lista[pos]
            if (lista[pos] < menor)
            menor = valores[pos]
        }
        media = soma / lista.length
        res.innerHTML = `<p>Ao todo, temos ${lista.length} números cadastrados.</p>
        <p>O maior valor informado foi ${(maior)}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digitados é ${media}.</p>
        `
    }
}
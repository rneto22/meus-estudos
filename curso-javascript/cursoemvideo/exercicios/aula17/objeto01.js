let amigo = {nome: 'Lobão', 
sexo: 'M',
peso: 220.0,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)
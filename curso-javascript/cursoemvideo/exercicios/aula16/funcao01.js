function parimpar(n) {
    if ( n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}
let res = parimpar(10)
console.log(`O número é um valor ${res}.`)
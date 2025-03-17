
//Traccia
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri 
// e una funzione operatore(callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

// Esempio d’uso:
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;

// const eseguiOperazione = (a, b, operazione) => operazione(a, b);

// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12

//Esecuzione
const eseguiOperazione = (num1, num2, funzioneCallback) => {
    //una volta invocata esegue questo su due parametri
    return funzioneCallback(num1, num2)
}

const somma  = eseguiOperazione(2, 4, (a, b) => {
    return a + b
})

console.log(somma)


// 2nd option
// const somma = (a, b) => {
//     return a + b
// }

// console.log(eseguiOperazione(2,4, somma))

//Notes
// funzioneCallback (parametro)
// (a, b) => {
// const somma = a + b
// return somma

//Esempi altre operazioni
//operazione= quadrato
// const eseguiOperazioneQuadrato = (num1, funzioneCallback) => {
//     //una volta invocata esegue questo su due parametri
//     funzioneCallback(num1)
// }

// eseguiOperazioneQuadrato(2, (num) => {
//     const quadrato = num * num
//     return quadrato
// })
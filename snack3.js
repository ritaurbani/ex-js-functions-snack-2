
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

//Operazioni-CallBack
const somma = (a, b) => a + b
const quadrato = num => num * num

console.log(eseguiOperazione(2,4, somma))


// //Other Option
// const somma2  = eseguiOperazione(2, 4, (a, b) => {
//     return a + b
// })

// console.log(somma2)


// TRACCIA SNACK 4

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo(in ms)
// e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

//scopo - restituire funzione che avvia il timer quando la chiamiamo!

//Esecuzione
function creaTimer(time) {
    return function() {
    setTimeout (() => {
        console.log("tempo scaduto!")
    },time)
}};

//valore di ritorno e' la funzione interna che salviamo in timer
const timer = creaTimer(5000) 
//quindi timer e`
// function() {
//     setTimeout(() => {
//         console.log("tempo scaduto!")
//     }, time)
// }

//quando invoco timer eseguo funzione
timer()

//utilita`
//posso creare diversi timer e farli partire quando voglio

//versione breve
// const creaTimer = (tempo) => () => setTimeout(() => 
//     console.log("Tempo scaduto!"), tempo);


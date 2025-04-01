// TRACCIA SNACK 4

// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo(in ms)
// e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

//scopo - restituire funzione che avvia il timer quando la chiamiamo!

//Esecuzione
function creaTimer(time) {
    //devo aspettare del tempo prima di fare qualcosa - in timeout ho una callback eseguita dopo tempo
    return function() { //qui posso scrivere return () => {}
    setTimeout (() => {
        console.log("tempo scaduto!")
    },time)
}};

//valore di ritorno e' la funzione interna che salviamo in timer
const timer = creaTimer(5000) 

timer()


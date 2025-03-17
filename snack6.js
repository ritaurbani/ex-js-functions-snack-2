//TRACCIA
// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, 
// incrementando un contatore e stampandolo.

//EXECUTION
function creaContatoreAutomatico(timeInterval) {
    // let counter = 0;
    return function () {
        let counter = 0;
        setInterval(() => {
            counter++
            console.log(counter)
        }, timeInterval)
    }
}

//contatore con intervallo di 2 sec - non la eseguo subito ma la salvo ed eseguo quando voglio
const contatore1 = creaContatoreAutomatico(1000) //possiamo passare ("uno", 1000) e passare name come parametro alla funzione
const contatore2 = creaContatoreAutomatico(2000)//possiamo passare ("due", 2000)
//avvio contatore - esegue funzione restituita e avvia setinterval
// contatore1()
// contatore2()

//NOTES
//se voglio contatore che parte da un numero allora passo a contatore(5)
// e nella return function(start=0) {
//     let counter = start...
// }

//DOMANDE
// scope variabile (dentro fuori dalla funzione)
//counter e dentro quindi e separato
//counter globale, quindi ogni chiamata di startCounter() condivide lo stesso contatore.
//Il secondo contatore non parte da 0, ma continua da dove è arrivato il primo!


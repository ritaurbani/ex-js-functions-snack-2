//TRACCIA
// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo 
// e restituisce una funzione che avvia un setInterval, 
// incrementando un contatore e stampandolo.

//EXECUTION
function creaContatoreAutomatico(timeInterval) {
    let counter = 0; 
    return function () {
        setInterval(() => {
            counter++
            console.log(counter)
        }, timeInterval)
    }
}


const contatore1 = creaContatoreAutomatico(1000) 
const contatore2 = creaContatoreAutomatico(2000)
// contatore1()
// contatore2()



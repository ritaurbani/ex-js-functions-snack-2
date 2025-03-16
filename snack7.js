// TRACCIA
// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, 
// un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, 
// ma si deve fermare dopo il tempo di stop.


//ESECUZIONE
function eseguiEferma(message, start, end) {
    //avvio interval dopo start (non subito)
    setTimeout(() => {
        const intervalId = setInterval(() => {
            console.log(message)
        }, 1000);
        //dopo end clear..
        setTimeout(() => {
            clearInterval(intervalId)
            console.log("end")
        }, end)

    }, start)
}

console.log(eseguiEferma("ciao", 2000, 4000))
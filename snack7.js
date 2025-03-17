// TRACCIA
// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, 
// un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, 
// ma si deve fermare dopo il tempo di stop.


//ESECUZIONE
function eseguiEferma(message, start, end) {
    //avvio interval dopo start (non subito)
        const intervalId = setInterval(() => {
            console.log(message)
        }, start);
        
        //dopo end clear..
        setTimeout(() => {
            clearInterval(intervalId)
            console.log("end")
        }, end)
}

console.log(eseguiEferma("ciao", 2000, 4000)) //stampo ogni 2 sec per 4 sec e poi mi fermo

//NOTES
// timer function ritornano la loro refernece in memoria: id che rappresenta dove si trova quell intervallo
//
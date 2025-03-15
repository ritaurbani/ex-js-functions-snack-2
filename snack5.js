//TRACCIA
// Crea una funzione stampaOgniSecondo con setInterval.

// -Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() 
// in un altro script.

//closure-funzione figlia accede a variabile funzione madre

function stampaOgniSecondo(message){
    return setInterval(() => {
        console.log("message")
    }, 1000)
};

const interval = stampaOgniSecondo("ciao ciao")

//per fermare interval subito oppure dopo 2 sec:
// clearInterval(interval)

setTimeout(() => {
    clearInterval(interval)
},2000)

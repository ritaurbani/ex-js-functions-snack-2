//TRACCIA
// Creare un throttler per limitare l’esecuzione di una funzione

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo`limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, 
// esegue l'operazione originale al massimo una volta ogni n millisecondi.

// Esempio di utilizzo:
// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

// throttledLog(); // ✅ "Eseguito!"
// throttledLog(); // ❌ Ignorato (chiamato troppo presto)
// setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)


function creaThrottler(fun, timeLimit) {
    let isBlocked = false //sbloccato-blocco per evitare che funzione e chiamata troppo spesso

    return function() {
        if (!isBlocked) //seisbloced false - non c`e`blocco
        fun();
        isBlocked = true //fino allo sblocco non si puo piu eseguire

        setTimeout(()=> {
            isBlocked = false //dopo tempo limite sblocca
        },timeLimit) //come tempo di elaborazione
    }
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!" (subito)
throttledLog(); // ❌ Ignorato (troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

//NOTES
//Il throttling ha lo scopo di limitare l'esecuzione di una funzione a intervalli di tempo specifici.
//Blocca l'esecuzione fino a quando il setTimeout non riporta isThrottled a false
//Senza isThrottled, la funzione verrebbe eseguita ogni volta che viene chiamata, 
//senza nessun controllo sul tempo minimo tra un’esecuzione e l’altra.
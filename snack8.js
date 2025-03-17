// TRACCIA
// Crea una funzione che simula un conto alla rovescia

// Scrivi una funzione contoAllaRovescia che accetta un numero n 
// e stampa il conto alla rovescia da n a 0, 
// con un intervallo di 1 secondo tra ogni numero.
// Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// Esempio di utilizzo:
// contoAllaRovescia(5)
// Output atteso:
// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!

function contoAllaRovescia(n) {
    let start = n

    const intervalId = setInterval(() => {
        console.log(start)
        start--;
        if (start === 0) {
            clearInterval(intervalId)//questo id si vede anche all interno della funzione
            console.log("tempo scaduto")
        }
    }, 1000);
}

console.log(contoAllaRovescia(4))

//Notes
//avrei potuto usare setinterval solo se volevo far partire il timer 
// dopo un certo tempo, quindi se volevo ritardare

// se voglio far partire dopo un po`
// setTimeout(() => {
//     console.log("Inizio del countdown...");
//     contoAllaRovescia(5);
// }, 3000);`

//concetto di closure
//posso accedere a variabile start 
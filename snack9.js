// Creare una funzione che esegue una sequenza di operazioni con ritardi

// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni
// (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza 
// con un ritardo uguale al tempo di intervallo.

// Esempio di utilizzo:
// sequenzaOperazioni([
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ], 2000);

// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3

function sequenzaOperazioni(arr, time) {
    arr.forEach((operazione, i) => {
        setTimeout(() => {
            // console.log(`Eseguo operazione ${i + 1} dopo ${i * time}ms`);
            operazione(); //esegue operazione salvata in arr[i]
        }, time * i)
    });
}

//EXECUTION
//voglio eseguire ogni funzione ogni 2 sec
sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);

//NOTES
//con for loop
// function sequenzaOperazioni(arr, time) {
//     for (let i = 0; i < arr.length; i++) {
//         setTimeout(arr[i], i * time);
//     }
// }
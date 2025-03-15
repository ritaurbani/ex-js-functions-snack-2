//TRACCIA SNACK1

// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri 
// e restituisce la loro somma.
// Poi, definisci la stessa funzione somma 
// ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//1. funzione dichiarativa: possono essere chiamate prima della loro definizione (hoisting)
//quando vuoi una funzione che possa essere chiamata ovunque
function somma1(num1,num2) {
    return num1+num2
}

console.log(somma1(2, 4))

//2. funzione anonima - senza nome e assegnata a una variabile - Function expression
const somma2 = function (num1, num2) { 
    return num1 + num2 }

    console.log(somma2(2, 3))

//3. arrow function
const somma3 = (num1, num2) => {
    return num1 + num2
}

console.log(somma3(2, 3))
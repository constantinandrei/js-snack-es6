/*

Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.

*/


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 1;
const max = 4;

let newArrayWithForEach = [];

myArray.forEach((nome, i) => {
    if (i >= min && i <= max){
        newArrayWithForEach.push(nome);
    }
})

let newArrayWithFilter = myArray.filter((nome, i) => i >= min && i <= max)



console.log(newArrayWithForEach)
console.log(newArrayWithFilter);

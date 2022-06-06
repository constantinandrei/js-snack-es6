/*

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadreArray = [
    {
        nome: 'Livorno Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Pisa Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Firenze Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Ponsacco Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Borgo a Buggiano Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Bellaria Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'La Rotta Calcio',
        puntiFatti: 0,
        falliSubiti: 0
    }
]

for (let i = 0; i < squadreArray.length; i++){
    squadreArray[i]. puntiFatti = Math.floor(Math.random() * 100);
    squadreArray[i]. falliSubiti = Math.floor(Math.random() * 30);
}

let nuoveSquadre = [];

for (let i = 0; i < squadreArray.length; i++){
        const {nome, falliSubiti} = squadreArray[i];
        const squadra = {
            nome,
            falliSubiti
        }

        nuoveSquadre.push(squadra);
}

for (let i = 0; i < nuoveSquadre.length; i++){
    const {nome, falliSubiti} = nuoveSquadre[i];
    console.log('---------------------------')
    console.log ('Nome squadra: ' + nome);
    console.log('Falli subiti: ' + falliSubiti)
}


console.log(nuoveSquadre);

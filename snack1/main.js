/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

const documentOutput = document.getElementById('doc-output');


const bikeArray = [
    {
        nome: 'Bianchi',
        peso: 9
    },
    {
        nome: 'Trek',
        peso: 7
    },
    {
        nome: 'Legnano',
        peso: 13
    },
    {
        nome: 'Pinarello',
        peso: 6
    },
    {
        nome: 'Specialized',
        peso: 8
    },
    {
        nome: 'Wilier',
        peso: 10
    }
];


const {nome, peso} = bikeArray[0];

let biciPiuLeggera = {
    nome,
    peso
}

for (let i = 1; i < bikeArray.length; i++){
    const {nome, peso} = bikeArray[i]
    if (peso < biciPiuLeggera.peso){
        biciPiuLeggera = {
            nome,
            peso
        }
    }
}

documentOutput.innerHTML = `<li>${biciPiuLeggera.nome}</li>
                            <li>${biciPiuLeggera.peso} Kg</li>`

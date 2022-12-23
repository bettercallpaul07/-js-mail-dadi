//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Prendo un numero tra 0 e un 1 (estremo superiore escluso) con math random lo moltiplico per 6, gli aggiungo piu 1 e prende l'intero inferiore.

const computer = Math.floor(Math.random() * 6 + 1);
const player = Math.floor(Math.random() * 6 + 1);

console.log("Numero giocatore umano:", player)
console.log("Numero computer:", computer)


if (player > computer) {
    console.log("Ha vinto il giocatore umano!")

}

else if (player < computer) {
    console.log ("Ha vinto il computer!")
}

else {
    console.log("Pareggio!")
}


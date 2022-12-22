//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.

const mailList = ["mail@pippo.it","mail@pluto.it","mail@paperino.it"];

let myMail = prompt("Inserisci la tua e-mail");

console.log (mailList.length)
console.log(mailList, typeof mailList);
console.log(myMail, typeof myMail);

for (let i = 0; i < mailList.length; i++) {

    if (mailList[i] == myMail) {
        console.log(mailList[i], 'Presente');
        break
    }
    else {
        console.log("Assente");
    }

}
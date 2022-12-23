//Chiedi all'utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull'esito del controllo.

const mailList = ["mail@pippo.it","mail@pluto.it","mail@paperino.it"];

let myMail = prompt("Inserisci la tua e-mail");
let validEmail = true

//console.log (mailList.length)
//console.log(mailList, typeof mailList);
//console.log(myMail, typeof myMail);

const access = mailList.includes(myMail)

if(access== true) {
    alert("Email valida")
}

else {
    alert("Email non valiida.")
}
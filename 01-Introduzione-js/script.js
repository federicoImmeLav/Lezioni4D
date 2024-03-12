// creo una variabile dalla quale far dipendere il colore
let a = 0;
console.log(a);
 
// prendo nel documento l'elemento che si chiama titolo
 let bassi = document.getElementById("titolo");
 console.log(bassi);

// creo una funzione
// dopo function scelgo il nome della funzione e metto le parentesi
function cambioColore() {
    // scriverò quello che voglio che faccia la funzione
    // faccio dipendere dalla variabile il colore
    if(a == 0) {
        // comando che cambia il colore, prima cambia lo stile e poi specifico cosa dello stile
        bassi.style.color = "green";
        a = 1;
        console.log(a);
    }
    else if(a == 1) {
        bassi.style.color = "red";
        a = 0;
        console.log(a);
    }
}

function aggiungiScritta() {
    // inserisco la funzione che aggiunge una scritta a un elemento html
    document.getElementById("sottotitolo").innerHTML = "e' la persona piu' intelligente che conosco";
}




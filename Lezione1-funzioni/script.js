// la mia funzione deve andare a prendersi i numeri nei campi di input 
// poi deve sommarli
// poi deve scrivermi il risultato nel sito 

// creo le variabili dei numeri e del risultato
let primoNumero;
let secondoNumero;
let risultato;

// creo la funzione somma
function somma() {
    // parsefloat mette il numero nella variabile mentre value lo legge
    primoNumero = parseFloat(document.getElementById("primoNumero").value);
    // controllo nella console se sto leggendo il numero giusto
    console.log(primoNumero);
    // faccio la stessa cosa con il secondo numero
    secondoNumero = parseFloat(document.getElementById("secondoNumero").value);
    console.log(secondoNumero);

    // faccio l'operazione di somma
    risultato = primoNumero + secondoNumero;
    console.log(risultato);

    // aggiungo la funzione che scrive nell'html
    document.getElementById("belRiquadro").innerHTML = risultato;
}

function sottrazione() {
    // parsefloat mette il numero nella variabile mentre value lo legge
    primoNumero = parseFloat(document.getElementById("primoNumero").value);
    // controllo nella console se sto leggendo il numero giusto
    console.log(primoNumero);
    // faccio la stessa cosa con il secondo numero
    secondoNumero = parseFloat(document.getElementById("secondoNumero").value);
    console.log(secondoNumero);

    // faccio l'operazione di sottrazione
    risultato = primoNumero - secondoNumero;
    console.log(risultato);

    // aggiungo la funzione che scrive nell'html
    document.getElementById("belRiquadro").innerHTML = risultato;
}

function moltiplicazione() {
    // parsefloat mette il numero nella variabile mentre value lo legge
    primoNumero = parseFloat(document.getElementById("primoNumero").value);
    // controllo nella console se sto leggendo il numero giusto
    console.log(primoNumero);
    // faccio la stessa cosa con il secondo numero
    secondoNumero = parseFloat(document.getElementById("secondoNumero").value);
    console.log(secondoNumero);

    // faccio l'operazione di moltiplicazione
    risultato = primoNumero * secondoNumero;
    console.log(risultato);

    // aggiungo la funzione che scrive nell'html
    document.getElementById("belRiquadro").innerHTML = risultato;
}

function divisione() {
    // parsefloat mette il numero nella variabile mentre value lo legge
    primoNumero = parseFloat(document.getElementById("primoNumero").value);
    // controllo nella console se sto leggendo il numero giusto
    console.log(primoNumero);
    // faccio la stessa cosa con il secondo numero
    secondoNumero = parseFloat(document.getElementById("secondoNumero").value);
    console.log(secondoNumero);

    // faccio l'operazione di sottrazione
    risultato = primoNumero / secondoNumero;
    console.log(risultato);

    // aggiungo la funzione che scrive nell'html
    document.getElementById("belRiquadro").innerHTML = risultato;
}

// creo la funziona unica per le mie operazioni
function operazione(tipo) {
    // parsefloat mette il numero nella variabile mentre value lo legge
    primoNumero = parseFloat(document.getElementById("primoNumero").value);
    // controllo nella console se sto leggendo il numero giusto
    console.log(primoNumero);
    // faccio la stessa cosa con il secondo numero
    secondoNumero = parseFloat(document.getElementById("secondoNumero").value);
    console.log(secondoNumero);
    console.log(tipo);
    if (tipo == somma) {
        risultato = primoNumero + secondoNumero;
    } else if (tipo == sottrazione) {
        risultato = primoNumero - secondoNumero;
    } else if (tipo == moltiplicazione) {
        risultato = primoNumero * secondoNumero;
    } else if (tipo == divisione) {
        risultato = primoNumero / secondoNumero;
    }

    // aggiungo la funzione che scrive nell'html
    document.getElementById("belRiquadro").innerHTML = risultato;
}

function cambiaColore(colore, raggio) {
    // prendo l'elemento e lo metto nella variabile
    let quadrato = document.getElementById("quadrato");
    console.log(colore);
    //il valore del colore che sto passando come argomento lo inserisco automaticamente
    //nella funzione che cambia il colore
    quadrato.style.backgroundColor = colore;
    quadrato.style.borderRadius = raggio;
}
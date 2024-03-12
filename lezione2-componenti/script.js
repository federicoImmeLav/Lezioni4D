// carico il menu in una variabile
let menu = document.getElementById("menu");
// controllo nella console che sto caricando l'elemento corretto
console.log(menu);
let a = 0;

function appariMenu() {
    // creo alternanza di click con la variabile
    if(a == 0) {
        // funzione che fa apparire il menu
        menu.style.display = "block";
        a = 1;
    }
    else if(a == 1) {
        // faccio sparire il menu
        menu.style.display = "none";
        a = 0;
    }
}


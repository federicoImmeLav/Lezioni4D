// inserisco in una variabile il contenuto del mio accordion
let accordion = document.getElementsByClassName("contenitore");
console.log(accordion); 

let a = 0;
// funzione che accende e spegne l'accordion
for(i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        // funzione che attiva o spegne la classe active all'elemento
        this.classList.toggle('active')
    } )
}
 

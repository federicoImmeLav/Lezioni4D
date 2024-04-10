let a = 0;

function appariMenu() {
    if(a == 0) {
        document.getElementById("menu").style.display = "block";
        a = 1;
    }
    else if(a == 1) {
        document.getElementById("menu").style.display = "none";
        a = 0 ; 
    } 
}

const titoli = [
    "video 0",
    "video 1",
    "video 2",
    "video 3",
    "video 4",
    "video 5",
    "video 6",
    "video 7",
    "video 8",
    "video 9",
    "video 10", 
];

function creaVideo() {
    for (let i = 0; i < 30; i++) {
    
    let contenitore = document.createElement("div");
    contenitore.setAttribute('id', 'contenitoreVideo');

    let immagine = document.createElement("img");
    immagine.setAttribute('id','thumbnail');

    let titolo = document.createElement("h3");
    let sottotitolo = document.createElement("p");

    document.getElementById("home").appendChild(contenitore);
    contenitore.appendChild(immagine).src = "img/video.png";
    immagine.width = "500";
    contenitore.appendChild(titolo).innerHTML = titoli[i];
    contenitore.appendChild(sottotitolo).innerHTML = "Sottotitolo del video";
    }
    console.log(contenitore);
    console.log(immagine);
    console.log(titolo);
    console.log(sottotitolo);

}

creaVideo();



// Array



console.log(titoli[1]);

function test() {
    for (let i = 0; i < 10; i++) {
        let divTest = document.createElement("div");
        document.getElementById("test").appendChild(divTest);
        divTest.innerHTML = titoli[i];
    }
}

test();


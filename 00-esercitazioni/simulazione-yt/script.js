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


function creaVideo() {
    let contenitore = document.createElement("div");
    contenitore.setAttribute('id', 'contenitoreVideo');

    let immagine = document.createElement("img");
    immagine.setAttribute('id','thumbnail');

    let titolo = document.createElement("h3");
    let sottotitolo = document.createElement("p");

    document.getElementById("home").appendChild(contenitore);
    contenitore.appendChild(immagine).src = "img/video.png";
    immagine.width = "500";
    contenitore.appendChild(titolo).innerHTML = "Titolo del video";
    contenitore.appendChild(sottotitolo).innerHTML = "Sottotitolo del video";



    console.log(contenitore);
    console.log(immagine);
    console.log(titolo);
    console.log(sottotitolo);

}

creaVideo();

for (let i = 0; i < 10; i++) {
    creaVideo();
}
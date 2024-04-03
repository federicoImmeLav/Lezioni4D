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

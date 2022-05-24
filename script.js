window.addEventListener("DOMContentLoaded",load)

function load(){
    console.log("function is running");
    window.location.hash="splash"; 
}

//Source: Sandie Neander Petersen
//Gør at hjemmesiden starter ved forside sektionen.


// Source: Christian Pedersen
var item = document.getElementById("main");

window.addEventListener("wheel", e => {
    if (e.deltaY > 0) {
        item.scrollLeft += 500;
    } else {
        item.scrollLeft -= 500;
    }
}); 

//Det gør at brugeren kan scroll tilhøjre og venstre med musen.
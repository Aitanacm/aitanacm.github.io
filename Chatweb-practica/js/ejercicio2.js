'use strict'
function gestionarFicheroTXT(txtDoc) {
    let cuerpo = document.querySelector("main")
    let mensajes = txtDoc.split("\n")
    let cadena = "<article>" 
    for (let mensaje of mensajes)
    {
        if (mensaje.includes("e:"))
            cadena += "<p class='emisor'>" + mensaje.split("e:")[1] + "</p>"
        else cadena += "<p class='receptor'>" + mensaje.split("r:")[1] + "</p>"
    }
    cuerpo.innerHTML += cadena + "</article>";
}
setInterval(loadLDocA("ejercicio2.txt"), 10000)

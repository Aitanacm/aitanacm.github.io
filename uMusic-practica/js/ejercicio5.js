'use strict'
function gestionarFicheroXML(xmlDoc) {
    let productos = xmlDoc.querySelectorAll("producto")
    let cartas = document.querySelectorAll(".card-body")
    for (let i = 0; i < productos.length; i++) {
        cartas[i].querySelector(".card-title").textContent = productos[i].querySelector("nombre").textContent
        cartas[i].querySelector(".card-text").textContent = productos[i].querySelector("descripcion").textContent
        console.log(productos[i].querySelector("descripcion").textContent)
    }
}

loadLDocA("ejercicio5.xml")
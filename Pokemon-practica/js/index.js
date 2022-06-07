let fondoActual = "url(img/isla-pokemon.png) 0% 0% / cover no-repeat";
let modoActual = "bg-light text-dark";
let num = Math.floor((Math.random() * (898 - 1 + 1)) + 1);
Pokemon.getPokemon(num).then(pokemon => pokemon.pintaPokemon())

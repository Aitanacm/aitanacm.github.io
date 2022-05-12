
let num = Math.floor((Math.random() * (898 - 1 + 1)) + 1);
Pokemon.getPokemon(num).then(pokemon => pokemon.pintaPokemon())

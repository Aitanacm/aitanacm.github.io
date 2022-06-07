class Pokemon {
    constructor(img, name, exp, ataque, defensa) {
        this.img = img;
        this.name = name;
        this.exp = exp;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    static getPokemon(numero) {
        return HTTP.ajax('GET', `https://pokeapi.co/api/v2/pokemon/${numero}`).then(data => {
            let pk_img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${numero}.png`;
            console.log(data)
            let pk_name = data.name;
            let pk_exp = data.base_experience;
            let pk_ataque = data.stats[1].base_stat;
            let pk_defensa = data.stats[2].base_stat;
            return new Pokemon(pk_img, pk_name, pk_exp, pk_ataque, pk_defensa);
        })
    }
    pintaPokemon(pokemon) {

        let main = document.createElement("main");
        main.className = "d-flex justify-content-center align-items-center";
        main.style.background = fondoActual;

        let card = document.createElement("div");
        card.className = "card " + modoActual;

        let cheader = document.createElement("div");
        cheader.className = "card-header";

        let img = document.createElement("img");
        img.src = this.img;
        img.className = "card-img-top no-filter";

        let name = document.createElement("h4");
        name.textContent = this.name + `[${num}]`;
        name.className = "card-body-title";

        let cbody = document.createElement("div");
        cbody.className = "card-body";


        let cstats = document.createElement("div");
        cstats.className = "stats";

        let expdiv = document.createElement("div");
        expdiv.className = "experiencia";

        let expTitle = document.createElement("h6");
        expTitle.textContent = "EXP";

        let exp = document.createElement("p");
        exp.textContent = this.exp;

        let atqdiv = document.createElement("div");
        atqdiv.className = "ataque";

        let atqTitle = document.createElement("h6");
        atqTitle.textContent = "ATQ";

        let ataque = document.createElement("p");
        ataque.textContent = this.ataque;

        let defdiv = document.createElement("div");
        defdiv.className = "defensa";

        let defTitle = document.createElement("h6");
        defTitle.textContent = "DEF";

        let def = document.createElement("p");
        def.textContent = this.defensa;

        let next = document.createElement("button");
        next.className = "btn text-light next";

        let nextImg = document.createElement("img");
        nextImg.src = "img/caret-right-fill.svg";


        let cbttons = document.createElement("div");
        cbttons.className = "buttons";

        let prev = document.createElement("button");
        prev.className = "btn text-light previous";

        let prevImg = document.createElement("img");
        prevImg.src = "img/caret-left-fill.svg";

        let colorMode = document.createElement("button");
        colorMode.className = "btn color-mode";

        let colorModeImg = document.createElement("img");
        colorModeImg.src = "img/brightness-low-fill.svg";
        colorModeImg.className = "color-mode-img";

        let backgrnd = document.createElement("button");
        backgrnd.className = "btn background";

        let backgrndImg = document.createElement("img");
        backgrndImg.src = "img/image-fill.svg";
        backgrndImg.className = "bkgrnd-img";

        let pok = document.body;
        pok.innerHTML = '';
        document.body.appendChild(main);
        document.body.querySelector("main").appendChild(card);
        document.body.querySelector(".card").appendChild(cheader);
        document.body.querySelector(".card-header").appendChild(img);
        document.body.querySelector(".card").appendChild(cbody);

        document.body.querySelector(".card-body").appendChild(name);

        document.body.querySelector(".card-body").appendChild(cstats);

        document.body.querySelector(".stats").appendChild(expdiv);
        document.body.querySelector(".experiencia").appendChild(expTitle);
        document.body.querySelector(".experiencia").appendChild(exp);

        document.body.querySelector(".stats").appendChild(atqdiv);
        document.body.querySelector(".ataque").appendChild(atqTitle);
        document.body.querySelector(".ataque").appendChild(ataque);

        document.body.querySelector(".stats").appendChild(defdiv);
        document.body.querySelector(".defensa").appendChild(defTitle);
        document.body.querySelector(".defensa").appendChild(def);

        document.body.querySelector(".card-body").appendChild(cbttons);
        document.body.querySelector(".buttons").appendChild(prev);
        document.body.querySelector(".previous").appendChild(prevImg);
        document.body.querySelector(".buttons").appendChild(colorMode);
        document.body.querySelector(".color-mode").appendChild(colorModeImg);
        document.body.querySelector(".buttons").appendChild(backgrnd);
        document.body.querySelector(".background").appendChild(backgrndImg);
        document.body.querySelector(".buttons").appendChild(next);
        document.body.querySelector(".next").appendChild(nextImg);

        document.querySelector(".next").addEventListener("click", function () {
            Pokemon.getPokemon(num + 1 > 898 ? num = 1 : ++num).then(
                pokemon => pokemon.pintaPokemon())
        });
        document.querySelector(".previous").addEventListener("click", function () {
            Pokemon.getPokemon(num - 1 < 1 ? num = 898 : --num).then(
                pokemon => pokemon.pintaPokemon())
        });
        img.addEventListener("click", function () {
            if (img.src != `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`) {
                img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;
            }
            else {
                img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${num}.png`;
            }
        });
        name.addEventListener("click", function () {

            if (img.className.includes("filtro")) {
                img.className = img.className.replace("filtro", "no-filter");
            }
            else {
                img.className = img.className.replace("no-filter", "filtro");
            }
        });
        atqdiv.addEventListener("click", function () {
            img.animate([
                { transform: 'scale(1)' },
                { transform: 'rotate(-20deg)' },
                { transform: 'scale(2)' },
                { transform: 'scale(1)' }
            ], {
                duration: 1500
            })
        });
        defdiv.addEventListener("click", function () {
            img.animate([
                { transform: 'scale(1)' },
                { transform: 'rotate(180deg)' },
                { transform: 'rotate(-180deg)' },
                { transform: 'scale(0.5)' },
                { transform: 'scale(0)' },
                { transform: 'scale(0)' },
                { transform: 'scale(0.5)' },
                { transform: 'scale(1)' }
            ], {
                duration: 2000
            })
        });
        expdiv.addEventListener("click", function () {
            img.animate([
                { transform: 'rotateY(180deg)' },
                { transform: 'rotateY(-180deg)' },
                { transform: 'rotateY(-180deg)' },
            ], {
                duration: 2000
            })
        });
        colorMode.addEventListener("click", function () {
            if (card.className.includes("bg-light")) {
                modoActual = card.className = card.className.replace("bg-light text-dark", "bg-dark text-light");
                colorModeImg.style.filter = nextImg.style.filter = prevImg.style.filter = backgrndImg.style.filter = "invert()"
            }
            else {
                modoActual = card.className = card.className.replace("bg-dark text-light", "bg-light text-dark");
                colorModeImg.style.filter = nextImg.style.filter = prevImg.style.filter = backgrndImg.style.filter = "none"
            }
        });
        backgrnd.addEventListener("click", function () {
            if (main.style.background == 'url("img/isla-pokemon.png") 0% 0% / cover no-repeat') {
                fondoActual = main.style.background = 'url("img/pokemon-in-the-wild.png") 0% 0% / cover no-repeat'
            }
            else if (main.style.background == 'url("img/pokemon-in-the-wild.png") 0% 0% / cover no-repeat') {
                fondoActual = main.style.background = 'url("img/forest.jpg") 0% 0% / cover no-repeat';
            }
            else {
                fondoActual = main.style.background = 'url("img/isla-pokemon.png") 0% 0% / cover no-repeat';
            }
        });
    }
}
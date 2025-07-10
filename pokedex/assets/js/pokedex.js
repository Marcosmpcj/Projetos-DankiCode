//Pokedex

const quantidade = document.getElementById("quantidade");

quantidade.addEventListener('keyup',()=> {
    pegaPokemons(quantidade.value)
})

pegaPokemons()
function pegaPokemons(quantidade) {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=" + quantidade)
        .then(response => response.json())
        .then(allpokemon => {

            let pokemons = [];

            allpokemon.results.map((val) => {

                fetch(val.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({
                            nome: val.name,
                            imagem: pokemonSingle.sprites.front_default
                        })

                        if (pokemons.length == quantidade) {
                            //Finalizamos nossas requisições.,

                            const pokemonBoxes = document.querySelector('.pokemon-boxes');
                            pokemonBoxes.innerHTML = "";

                            pokemons.map((val => {
                                pokemonBoxes.innerHTML += `
                        <div class="pokemon-box">
                            <p>${val.nome}</p>
                            <img src="${val.imagem}">   
                        </div>
                        `;
                            }))
                        }
                    })
            })

        })

}

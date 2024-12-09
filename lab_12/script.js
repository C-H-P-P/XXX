const container = document.getElementById("data-container");
const infoContainer = document.getElementById("info-container");

async function fetchPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) throw new Error("Pokémon not found");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

function showPokemonCard(pokemon, parent) {
    const card = document.createElement("div");
    card.className = "card-box";

    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h1>${pokemon.name}</h1>
    `;

    card.onclick = () => showPokemonInfo(pokemon);
    parent.appendChild(card);
}

function showPokemonInfo(pokemon) {
    infoContainer.innerHTML = `
        <div class="card-box">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h1>${pokemon.name}</h1>
            <p><strong>Abilities:</strong> ${pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
            <p><strong>Weight:</strong> ${pokemon.weight}</p>
            <button id="back-button" class="back-button">Back</button>
        </div>
    `;

    const backButton = document.getElementById("back-button");
    backButton.onclick = () => showPokemonList();

    infoContainer.classList.remove("hidden");
    container.classList.add("hidden");
}

function showPokemonList() {
    infoContainer.classList.add("hidden");
    container.classList.remove("hidden");
}

async function loadPokemons() {
    const pokemonIds = [1, 4, 7, 25, 39, 94];
    for (const id of pokemonIds) {
        const pokemon = await fetchPokemon(id);
        if (pokemon) showPokemonCard(pokemon, container);
    }
}

loadPokemons();

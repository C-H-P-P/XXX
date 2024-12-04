let container = document.getElementById("data-container");
let info_container = document.getElementById("info-container");

async function fetchData(id) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function show_data(id, loc) {
    const json = await fetchData(id);
    if (!json) {
        return;
    }

    let div = document.createElement("div");
    let img = document.createElement("img");
    let header = document.createElement("h1");
    let txt = document.createElement("p");

    div.classList = "card-box";
    div.onclick = () => window.location.href = `index-info.html?id=${id}`;
    img.src = json.sprites.front_default;
    header.innerText = json.forms[0].name;

    if (loc === info_container) {
        let abilities = json.abilities.map(ability => ability.ability.name).join(", ");
        txt.innerText = `Abilities: ${abilities}\nWeight: ${json.weight}`;
    }

    div.append(img);
    div.append(header);
    div.append(txt);
    loc.append(div);
}

async function loadPokemons() {
    if (container) {
        for (let i = 1; i <= 20; i++) {
            await show_data(i, container);
        }
    }
}

async function loadPokemonInfo() {
    if (info_container) {
        let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        if (id) {
            await show_data(id, info_container);
        } else {
            info_container.innerHTML = "<p>ID не знайдено</p>";
        }
    }
}

loadPokemons();
loadPokemonInfo();

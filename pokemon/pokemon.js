
const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/";

main();

async function main() {

    const pokemonName = getNamePokemon();
    const urlImage = await getUrlImagePokemon(pokemonName);
    const image = generateImage(urlImage, pokemonName);

    addImageInMain(image, pokemonName);
    alterTitle(pokemonName);

} 

function getNamePokemon() {
    const urlSearch = new URLSearchParams(location.search);
    return urlSearch.get("name") ? urlSearch.get("name") : "wartortle";
}

async function getUrlImagePokemon(pokemon) {
    console.log(`${POKEMON_API}${pokemon}`)

    const response = await fetch(`${POKEMON_API}${pokemon}`);
    const json = await response.json();
    console.log(json.sprites.front_default);
    return json.sprites.front_default;
}

function addImageInMain(image, pokemonName) {

    const main = document.querySelector('main');
    const divMain = document.createElement('div');
    divMain.classList.add('divMain');

    const h2 = document.createElement('h2');
    h2.textContent = `Informações sobre ${pokemonName}`;
    divMain.appendChild(h2);

    const div = document.createElement('div');
    div.appendChild(image);
    divMain.appendChild(div);
    main.appendChild(divMain);

}

function generateImage(image, pokemonName) {
    const img = document.createElement('img');
    img.setAttribute('src', `${image}`)
    img.setAttribute('alt', `Imagem do ${pokemonName}`);

    return img;
}

function alterTitle(pokemonName) {
    document.title = `Página do ${pokemonName}`;

    const h1 = document.querySelector('h1');
    h1.textContent = pokemonName;
}
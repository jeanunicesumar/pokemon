let images;
let count = 0;

function changePageTitle(title) {
    document.title = title
  }
  
  function generateInfoSection(images, pokemonName) {
    const h2 = document.createElement('h2')
    h2.id = "info-pokemon-label"
    h2.textContent = `Informações sobre ${pokemonName}`
  
    const img = document.querySelector('img')
    img.src = images[0]
    img.alt = `Imagem do pokemon ${pokemonName}`
  
    const section = document.querySelector('#info-pokemon')
  
    section.appendChild(h2)
    section.appendChild(img)
  }
  
  async function getPokemonData(name) {
  
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  
      const jsonData = await data.json()
    
      images = await filterImages(jsonData.sprites);
      generateInfoSection(images, name)
    } catch (error) {
      console.error(error)
    }
  }

  async function filterImages(images) {
    images = Object.values(images);
    return images.filter(image => typeof image === "string");
  }
  
  function getSearchParams() {
    // Early return -> Caso location search, não faz nada.
    if (!location.search) {
      return
    }
  
    // URLSearchParams é uma classe que facilita a manipulação de query strings
    const urlSearchParams = new URLSearchParams(location.search)
  
    // Pegando o valor do parâmetro name
    const pokemonName = urlSearchParams.get('name')
  
    changePageTitle(`Pagina do ${pokemonName}`)
    getPokemonData(pokemonName)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    getSearchParams();
    
    const img = document.querySelector('img');
    img.addEventListener("click",() => {
        alterImage(img);
    })   
  })

  function alterImage(img) {
    count = count + 1;
    count = count === 4 ? 0 : count;
    img.src = images[count];
  }
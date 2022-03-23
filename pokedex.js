const nombre = document.getElementById("info1");
const ID = document.getElementById("info2");
const peso = document.getElementById("info3");
const altura = document.getElementById("info4");
const tipos = document.getElementById("info5");
const estadisticas = document.getElementById("estadisticas");
const movimientos = document.getElementById("movimientos");




const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImg("https://media.tenor.com/images/41c7c6bf53a0d431cf77001b956ac9bf/tenor.gif");
            const pokError = document.getElementById("info1");
            pokError.textContent = "Pokemon no identificado. Intente de nuevo.";
            
            ID.textContent = "";
            peso.textContent = "";
            altura.textContent = "";
            tipos.textContent = "";
            estadisticas.textContent = "";
            movimientos.textContent = "";

        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImage = data.sprites.front_default;
        console.log(pokeImg);
        pokeImg(pokeImage);
        
        let pokeName = data.name;
        pokeNombre(pokeName);
        
        let pokeId = data.id;
        pokeIdentificador(pokeId);

        let pokeWeight = data.weight;
        pokePeso(pokeWeight);

        let pokeHeight = data.height;
        pokeAltura(pokeHeight);
        
        MostrarDatos(data);
    })
}


//fetchPokemon();

const pokeImg = (url) => {
    const pokeImg = document.getElementById("foto");
    pokeImg.src = url;
}
const pokeNombre = (url) => {
    const pokeNombre = document.getElementById("info1")
    pokeNombre.textContent = 'Nombre: ' + url;
}
const pokeIdentificador = (url) => {
    const pokeIdentificador = document.getElementById("info2")
    pokeIdentificador.textContent = 'Id: ' + url;
}
const pokePeso = (url) => {
    const pokePeso = document.getElementById("info3")
    pokePeso.textContent = 'Peso: ' + url;
}
const pokeAltura = (url) => {
    const pokeAltura = document.getElementById("info4")
    pokeAltura.textContent = 'Altura: ' + url;
}




const MostrarDatos = (data) => {
    const {types, stats, moves} = data;
    
    PokemonTypes(types);
    PokemonStats(stats)
    PokemonMoves(moves)
}




const PokemonTypes = Types => {
    tipos.innerHTML = "Tipo:";
    Types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.textContent = type.type.name;
        tipos.appendChild(typeTextElement);
    });
}


const PokemonStats = stats => {
    estadisticas.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        statElement.className = "Entradas";
        const statElementName = document.createElement("div");
        statElementName.className = "Entradas";
        statElementName.textContent = `${stat.stat.name}: ${stat.base_stat}`;
        statElement.appendChild(statElementName);
        estadisticas.appendChild(statElement);
    });
}

const PokemonMoves = Movimientos => {
    movimientos.innerHTML = '';
    Movimientos.forEach(move => {
        const typeTextElement = document.createElement("div");
        typeTextElement.className = "Entradas";
        typeTextElement.textContent = move.move.name;
        movimientos.appendChild(typeTextElement);
    });
}


let pokemones = [];
let totalPokes = 1025;

async function conexion(UnFiltro = "All") {
  if (UnFiltro === "All") {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
    const data = await res.json();
    return data.results;
  } else {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
    const data = await res.json();

    const pokemonesTipo = [];
    for (let i = 0; i < data.pokemon.length; i++) {
      pokemonesTipo.push(data.pokemon[i].pokemon);
    }
    return pokemonesTipo;
  }
}


async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexion("All");
  }
  Home(pokemones);
  console.log(pokemones[0].name);
}

General();


async function FiltroConexion(filtroElegido) {
  let pokesfiltrados = await conexion(filtroElegido);
  document.getElementById("root").innerHTML = ""; 
  let listaFiltro = GenerarLista(pokesfiltrados); 
  document.getElementById("root").innerHTML = listaFiltro;
}

console.log("conexion.js cargado");
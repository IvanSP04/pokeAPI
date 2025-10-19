let pokemones = [];
let totalPokes = 1025;

async function conexion(UnFiltro = "All") {
    try {
        if (UnFiltro === "All") {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${totalPokes}`);
            const data = await res.json();
            return data.results;
        } else {
            const res = await fetch(`https://pokeapi.co/api/v2/type/${UnFiltro}`);
            const data = await res.json();
            return data.pokemon.map(p => p.pokemon);
        }
    } catch (error) {
        console.error("Error en conexión:", error);
        return [];
    }
}

async function General() {
    console.log("Iniciando carga de pokemones...");
    
    if (pokemones.length === 0) {
        // Mostrar mensaje de carga
        document.getElementById("root").innerHTML = `
            <div style="text-align: center; padding: 4rem; color: white; font-size: 2rem; font-weight: 800;">
                ⚡ Cargando Pokémon... ⚡
            </div>
        `;
        
        pokemones = await conexion("All");
        console.log("Pokemones cargados:", pokemones.length);
    }
    
    Home();
}

async function FiltroConexion(filtroElegido) {
    const root = document.getElementById("root");
    
    // Mostrar carga
    root.innerHTML = `
        <div style="text-align: center; padding: 4rem; color: white; font-size: 2rem; font-weight: 800;">
            ⚡ Cargando tipo ${filtroElegido}... ⚡
        </div>
    `;
    
    const pokesfiltrados = await conexion(filtroElegido);
    root.innerHTML = "";

    const titulo = document.createElement("h1");
    titulo.classList.add("c-titulo-seccion");
    titulo.textContent = `Tipo: ${filtroElegido.toUpperCase()}`;

    const btnVolver = document.createElement("button");
    btnVolver.classList.add("c-btn-volver");
    btnVolver.textContent = "← Volver a todos";
    btnVolver.addEventListener("click", () => Home());

    const contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-lista");
    contenedorLista.innerHTML = GenerarLista(pokesfiltrados);

    root.appendChild(titulo);
    root.appendChild(btnVolver);
    root.appendChild(contenedorLista);
}

// Iniciar cuando la página cargue
window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Cargado, iniciando General()");
    General();
});

console.log("conexion.js cargado");
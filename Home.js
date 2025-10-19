function GenerarLista(arraypokemones) {
    if (!arraypokemones || arraypokemones.length === 0) {
        return "<p style='color: white; text-align: center; font-size: 2rem;'>No hay pokémon para mostrar</p>";
    }
    
    let listaHTML = "";
    for (let i = 0; i < arraypokemones.length; i++) {
        let id = arraypokemones[i].url.split("/")[6];
        listaHTML += `
            <div class="c-lista-pokemon" onclick="Detalle('${id}')">
                <p>#${id}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" 
                     alt="${arraypokemones[i].name}" loading="lazy">
                <p>${arraypokemones[i].name}</p>
            </div>`;
    }
    return listaHTML;
}

function buscadorfuncion(texto) {
    if (!pokemones || pokemones.length === 0) {
        console.error("No hay pokémon cargados aún");
        return;
    }
    
    const filtrados = pokemones.filter(p => 
        p.name.toLowerCase().includes(texto.toLowerCase())
    );
    document.getElementById("la-lista").innerHTML = GenerarLista(filtrados);
}

function Home() {
    console.log("Ejecutando Home(), pokemones disponibles:", pokemones.length);
    
    const root = document.getElementById("root");
    root.innerHTML = "";

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "🔍 Buscar Pokémon por nombre...";
    buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

    const tipos = [
        "normal", "fighting", "flying", "poison", "ground", "rock", "bug",
        "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice",
        "dragon", "dark", "fairy"
    ];
    
    const filtro = document.createElement("div");
    filtro.classList.add("c-filtros");
    
    const btnTodos = document.createElement("button");
    btnTodos.textContent = "Todos";
    btnTodos.addEventListener("click", () => Home());
    filtro.appendChild(btnTodos);

    tipos.forEach(tipo => {
        const btn = document.createElement("button");
        btn.textContent = tipo;
        btn.addEventListener("click", () => FiltroConexion(tipo));
        filtro.appendChild(btn);
    });

    const contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-lista");
    contenedorLista.id = "la-lista";
    contenedorLista.innerHTML = GenerarLista(pokemones);

    root.appendChild(buscador);
    root.appendChild(filtro);
    root.appendChild(contenedorLista);
}
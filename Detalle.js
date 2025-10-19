var esFavorito = false;

function toggleFavorito(paramid, paramname) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some(p => p.name === paramname);

    if (existe) {
        favoritos = favoritos.filter(p => p.name !== paramname);
        esFavorito = false;
    } else {
        favoritos.push({
            name: paramname,
            url: `https://pokeapi.co/api/v2/pokemon/${paramid}/`
        });
        esFavorito = true;
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    
    const boton = document.querySelector("#corazon-" + paramid);
    if (boton) {
        boton.textContent = esFavorito ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos";
    }
}

async function Detalle(parametro) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const data = await res.json();

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    esFavorito = favoritos.some(p => p.name === data.name);

    let tiposHTML = data.types.map(t => 
        `<span class="c-tipo ${t.type.name}">${t.type.name}</span>`
    ).join("");

    const detalle = `
        <div class="c-detalle">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" 
                 alt="${data.name}">
            <h1>${data.name}</h1>
            <p style="font-size: 1.5rem; color: #FF6B6B; font-weight: 800; margin-bottom: 1rem;">#${data.id}</p>
            <div class="c-tipos">${tiposHTML}</div>
            
            <div class="c-stats-grid">
                <div class="c-stat-item">
                    <div class="c-stat-label">HP</div>
                    <div class="c-stat-value">${data.stats[0].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Ataque</div>
                    <div class="c-stat-value">${data.stats[1].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Defensa</div>
                    <div class="c-stat-value">${data.stats[2].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Ataque Esp.</div>
                    <div class="c-stat-value">${data.stats[3].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Defensa Esp.</div>
                    <div class="c-stat-value">${data.stats[4].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Velocidad</div>
                    <div class="c-stat-value">${data.stats[5].base_stat}</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Altura</div>
                    <div class="c-stat-value">${(data.height / 10).toFixed(1)}m</div>
                </div>
                <div class="c-stat-item">
                    <div class="c-stat-label">Peso</div>
                    <div class="c-stat-value">${(data.weight / 10).toFixed(1)}kg</div>
                </div>
            </div>

            <button class="c-favorito-btn" id="corazon-${data.id}" onclick="toggleFavorito(${data.id}, '${data.name}')">
                ${esFavorito ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
            </button>
        </div>
    `;

    root.innerHTML = detalle;
}
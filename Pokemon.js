async function Pokemon(h) {
    var root = document.getElementById("root");
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${h}`);
    const data = await res.json();

    // Construir tipos
    let tiposHTML = data.types.map(t => 
        `<span class="c-tipo ${t.type.name}">${t.type.name}</span>`
    ).join("");

    // Plantilla con el nuevo diseño
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
        </div>
    `;

    root.innerHTML = detalle;
}
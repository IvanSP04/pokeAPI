var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

function Aleatorios() {
    const nuevosDiv = document.getElementById("nuevos");
    if (!nuevosDiv) return;
    
    nuevosDiv.innerHTML = "";
    misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

    let pokesAleatorios = "";
    for (let i = 0; i < 4; i++) {
        const num = Math.floor(Math.random() * totalPokes) + 1;
        
        pokesAleatorios += `
            <div class="c-lista-pokemon c-un_aleatorio" onclick="Detalle('${num}')">
                <p>#${num}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png" 
                     alt="${pokemones[num - 1]?.name || 'Pokemon'}" loading="lazy">
                <p>${pokemones[num - 1]?.name || 'Pokemon'}</p>
            </div>`;

        if (!misNumeros.includes(num)) {
            misNumeros.push(num);
            const elemento = document.getElementById("c-unpoke-" + num);
            if (elemento) {
                elemento.innerHTML = `
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png" 
                         loading="lazy" alt="${num}">
                    <p>#${num}</p>`;
                elemento.classList.add("c-mios-pokemon");
                elemento.onclick = () => Detalle(num);
            }
        }
    }

    localStorage.setItem("misNumeros", JSON.stringify(misNumeros));
    nuevosDiv.innerHTML = pokesAleatorios;
    
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = `${misNumeros.length} / ${totalPokes}`;
    }
}

function Capturados() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    
    misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

    const header = document.createElement("div");
    header.classList.add("c-capturados-header");
    header.innerHTML = `
        <h1 style="color: #2d3436; margin-bottom: 1rem; font-size: 2.5rem; text-transform: uppercase;">📦 Mis Pokémon Capturados</h1>
        <div class="c-contador" id="contador">${misNumeros.length} / ${totalPokes}</div>
        <button class="c-capturar-btn" onclick="Aleatorios()">🎲 Capturar 4 Pokémon Aleatorios</button>
    `;

    const nuevosSection = document.createElement("section");
    nuevosSection.classList.add("c-lista");
    nuevosSection.id = "nuevos";
    nuevosSection.style.marginBottom = "2rem";

    const albumSection = document.createElement("section");
    albumSection.classList.add("c-lista");
    
    let misPokes = "";
    for (let i = 1; i <= totalPokes; i++) {
        if (misNumeros.includes(i)) {
            misPokes += `
                <div class="c-unpoke c-mios-pokemon" onclick="Detalle('${i}')">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" 
                         loading="lazy" alt="${i}">
                    <p>#${i}</p>
                </div>`;
        } else {
            misPokes += `
                <div class="c-unpoke" id="c-unpoke-${i}">
                    <p>${i}</p>
                </div>`;
        }
    }
    albumSection.innerHTML = misPokes;

    root.appendChild(header);
    root.appendChild(nuevosSection);
    root.appendChild(albumSection);
}
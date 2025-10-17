function Informativa(){
    document.getElementById("root").innerHTML = `
        <div class="c-informativa">
            <div class="c-info-header">
                <img src="https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20210907044555/Logo_Pok%C3%A9mon_Presents.png" alt="Pokemon Presents" class="c-presents-logo">
               </br>
                </div>
            
            <div class="c-info-content">
                <div class="c-info-card">
                    <div class="c-info-icon">🎮</div>
                    <h2>¿Qué es esta app?</h2>
                    <p>Una Pokédex interactiva que te permite explorar todos los Pokémon existentes, capturarlos aleatoriamente y guardar tus favoritos.</p>
                </div>

                <div class="c-info-card">
                    <div class="c-info-icon">🔍</div>
                    <h2>Explora</h2>
                    <p>Busca Pokémon por nombre o filtra por tipo. Descubre sus estadísticas, habilidades y características únicas.</p>
                </div>

                <div class="c-info-card">
                    <div class="c-info-icon">⚡</div>
                    <h2>Captura</h2>
                    <p>Obtén 4 Pokémon aleatorios cada vez que presiones el botón. Completa tu colección de los 1025 Pokémon.</p>
                </div>

                <div class="c-info-card">
                    <div class="c-info-icon">❤️</div>
                    <h2>Favoritos</h2>
                    <p>Marca tus Pokémon favoritos y accede rápidamente a ellos desde la sección de favoritos.</p>
                </div>
            </div>

            <div class="c-info-footer">
                <p>App con información de <strong>1025 pokemones</strong></p>
                <p class="c-info-api">Datos proporcionados por <strong>PokéAPI</strong>⚡</p>
            </div>
        </div>
    `;
}
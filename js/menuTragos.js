async function cargarVinos() {
    const loader = document.getElementById('loader');
    try {
        // Mostrar el loader
        loader.style.display = 'block';

        // URL de la API que proporciona los datos de los cócteles
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

        // Realizar la solicitud a la API
        const response = await fetch(url);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar los cócteles');
        }

        // Parsear la respuesta como JSON
        const data = await response.json();

        // Obtener los primeros 20 cócteles
        const vinos = data.drinks.slice(0, 20);

        // Generar el HTML para mostrar los cócteles
        const vinosHTML = vinos.map(vino => `
            <div class="card">
                <img src="${vino.strDrinkThumb}" class="card-img-top" alt="${vino.strDrink}">
                <div class="card-body">
                    <h5 class="card-title">${vino.strDrink}</h5>
                    <p class="card-text">${vino.strInstructions}</p>
                    <p class="card-text">Ingredientes: ${vino.strIngredient1}, ${vino.strIngredient2}, ${vino.strIngredient3}</p>
                </div>
            </div>
        `).join('');

        // Mostrar los cócteles en el div "sucursales"
        document.querySelector('.sucursales').innerHTML = vinosHTML;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Ocultar el loader
        loader.style.display = 'none';
    }
}

cargarVinos();
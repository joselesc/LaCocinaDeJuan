async function cargarPlatos() {
    const loader = document.getElementById('loader');
    try {
        // Mostrar el loader
        loader.style.display = 'block';

        // URL de la API que proporciona los datos de los platos
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

        // Realizar la solicitud a la API
        const response = await fetch(url);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Error al cargar los platos');
        }

        // Parsear la respuesta como JSON
        const data = await response.json();

        // Obtener los primeros 20 platos
        const platos = data.meals.slice(0, 20);

        // Generar el HTML para mostrar los platos
        const platosHTML = platos.map(plato => `
            <div class="card">
                <img src="${plato.strMealThumb}" class="card-img-top" alt="${plato.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${plato.strMeal}</h5>
                    <p class="card-text">${plato.strInstructions}</p>
                    <p class="card-text">Ingredientes: ${plato.strIngredient1}, ${plato.strIngredient2}, ${plato.strIngredient3}</p>
                </div>
            </div>
        `).join('');

        // Mostrar los platos en el div "sucursales"
        document.querySelector('.sucursales').innerHTML = platosHTML;
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Ocultar el loader
        loader.style.display = 'none';
    }
}

cargarPlatos();

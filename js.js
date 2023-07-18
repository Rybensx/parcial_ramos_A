const formulario = document.getElementById('formulario');
const main = document.querySelector('main');

const consultarApi = async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const url = `https://rickandmortyapi.com/api/character/?name=${nombre}`;

  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    main.innerHTML = '';

    if (data.results.length > 0) {
      data.results.forEach(personaje => {
        const article = document.createElement('article');
        article.innerHTML = `
          <div class="image-container">
            <img src="${personaje.image}" alt="Personaje">
          </div>
          <h2>${personaje.name}</h2>
          <span>${personaje.status}</span>
        `;
        main.appendChild(article);
      });
    } else {
      const mensaje = document.createTextNode('No se encontraron personajes con ese nombre.');
      main.appendChild(mensaje);
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    main.innerHTML = '<p>Error al cargar los personajes.</p>';
  }
};

formulario.addEventListener('submit', consultarApi);


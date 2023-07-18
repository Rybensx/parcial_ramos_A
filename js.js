const formularioNombre = document.getElementById('formularioNombre');
const formularioEpisodio = document.getElementById('formularioEpisodio');
const formularioLocalizacion = document.getElementById('formularioLocalizacion');
const main = document.querySelector('main');

const buscarPersonaje = async (nombre) => {
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

const buscarEpisodio = async (episodio) => {
  const url = `https://rickandmortyapi.com/api/episode?name=${episodio}`;
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    main.innerHTML = '';

    if (data.results.length > 0) {
      data.results.forEach(episode => {
        const article = document.createElement('article');
        article.innerHTML = `
          <div class="card">
            <h2>${episode.name}</h2>
            <p>Fecha de emisión: ${episode.air_date}</p>
            <p>Episodio: ${episode.episode}</p>
          </div>
        `;
        main.appendChild(article);
      });
    } else {
      const mensaje = document.createTextNode('No se encontraron episodios con ese nombre.');
      main.appendChild(mensaje);
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    main.innerHTML = '<p>Error al cargar los episodios.</p>';
  }
};

const buscarLocalizacion = async (localizacion) => {
  const url = `https://rickandmortyapi.com/api/location?name=${localizacion}`;
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    main.innerHTML = '';

    if (data.results.length > 0) {
      data.results.forEach(location => {
        const article = document.createElement('article');
        article.innerHTML = `
          <div class="card">
            <h2>${location.name}</h2>
            <p>Tipo: ${location.type}</p>
            <p>Dimensión: ${location.dimension}</p>
          </div>
        `;
        main.appendChild(article);
      });
    } else {
      const mensaje = document.createTextNode('No se encontraron localizaciones con ese nombre.');
      main.appendChild(mensaje);
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    main.innerHTML = '<p>Error al cargar las localizaciones.</p>';
  }
};

formularioNombre.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  buscarPersonaje(nombre);
});

formularioEpisodio.addEventListener('submit', (e) => {
  e.preventDefault();
  const episodio = document.getElementById('episodio').value;
  buscarEpisodio(episodio);
});

formularioLocalizacion.addEventListener('submit', (e) => {
  e.preventDefault();
  const localizacion = document.getElementById('localizacion').value;
  buscarLocalizacion(localizacion);
});

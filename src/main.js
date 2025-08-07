 function obtenerPersonajes(done){

    const result = fetch ("https://rickandmortyapi.com/api/character");

    result
        .then(response => response.json())
        .then (data => (
            done(data)
        ));

 }

 let postId = 1;
 obtenerPersonajes(data => (
        
        data.results.forEach(personaje => {
            
                const article = document.createRange().createContextualFragment(/*html*/`
                    
                    <article>
                        <div class="tarjetaPersonaje" data-post-id="${postId}">

                            <img class="personajeimg" src="${personaje.image}" alt="Imagen del personaje">

                            <h2>${personaje.name}</h2>
                            <h3>Status: ${personaje.status}</h3>
                            <h3>Specie: ${personaje.species}</h3>

                            <div class="contenedor-Puntuacion">   
                                <div class="puntuacionPersonaje">
                                    <span class="boton-puntuacion material-icons">thumb_up</span>
                                    <span class="contadorLikes">0</span>
                                </div>                   
                                
                                <div class="puntuacionPersonaje">
                                    <span class="boton-puntuacion material-icons">thumb_down</span>
                                    <span class="contadorLikes">0</span>
                                </div>
                            </div>

                        </div>
                    </article>

                    `);

                const main = document.querySelector("main");

                main.append(article);
                postId ++;
        })

 ));
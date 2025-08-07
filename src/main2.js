document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".tarjetaPersonaje").forEach(post => {
            const postId = post.dataset.postId;
            const ratings = post.querySelectorAll(".puntuacionPersonaje");
            const likeRating = ratings[0];
        
            ratings.forEach(rating => {
                const button = rating.querySelector(".boton-puntuacion");
                const count = rating.querySelector(".contadorLikes");      
        
                button.addEventListener("click", async() => {
                    if (rating.classList.contains("puntuacionPersonaje-seleccionado")){
                        return;
                    }
        
                    count.textContent = Number(count.textContent) + 1;
        
                    ratings.forEach(rating => {
                        if(rating.classList.contains("puntuacionPersonaje-seleccionado")){
                            const count = rating.querySelector(".contadorLikes");
        
                            count.textContent = Math.max(0,Number(count.textContent) - 1);
                            rating.classList.remove("puntuacionPersonaje-seleccionado");
                        }
                    });
        
                    rating.classList.add("puntuacionPersonaje-seleccionado");
                
                    const likeOrDislike = likeRating === rating ? "like" : "dislike";
                    const response = await fetch (`/posts/${postId}/${likeOrDislike}`)
                    const body = await response.json();
                });
            });
        
        });
        
    }, 2000); // espera 1 segundo a que se cargue el contenido
});
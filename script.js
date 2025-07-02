document.addEventListener('DOMContentLoaded', () => { // Asegura que el script se ejecute después de que todo el documento HTML esté cargado y analizado.
    const galeriaImgs = document.querySelectorAll('.galeria-img'); // Selecciona todos los elementos de imagen con la clase 'galeria-img' para la galería.
    const lightbox = document.getElementById('lightbox'); // Obtiene el elemento contenedor del lightbox por su ID.
    const imgExpandida = document.getElementById('img-expandida'); // Obtiene el elemento de imagen dentro del lightbox donde se mostrará la imagen expandida.
    const cerrarBtn = document.querySelector('.cerrar'); // Obtiene el elemento del botón de cerrar para el lightbox.
    const captionText = document.getElementById('caption'); // Obtiene el elemento de texto para el pie de foto de la imagen expandida en el lightbox.

    galeriaImgs.forEach(img => { // Itera sobre cada imagen en la galería.
        img.addEventListener('click', () => { // Agrega un 'event listener' de clic a cada imagen de la galería.
            lightbox.classList.add('visible'); // Agrega la clase 'visible' al lightbox para mostrarlo (controla la visibilidad a través de CSS).
            imgExpandida.src = img.src; // Establece la fuente de la imagen expandida en el lightbox a la fuente de la imagen clicada.
            captionText.innerHTML = img.alt; // Establece el texto del pie de foto de la imagen expandida al atributo 'alt' de la imagen clicada.
            document.body.style.overflow = 'hidden'; // Evita el desplazamiento del contenido de fondo cuando el lightbox está abierto.
        });
    });

    // Cierra el lightbox cuando se hace clic en el botón "x".
    cerrarBtn.addEventListener('click', () => { // Agrega un 'event listener' de clic al botón de cerrar.
        lightbox.classList.remove('visible'); // Elimina la clase 'visible' del lightbox para ocultarlo.
        document.body.style.overflow = ''; // Restablece la propiedad 'overflow' del body para permitir el desplazamiento de nuevo.
    });

    // Cierra el lightbox al hacer clic fuera de la imagen (en la superposición).
    lightbox.addEventListener('click', (e) => { // Agrega un 'event listener' de clic al propio contenedor del lightbox.
        if (e.target === lightbox) { // Comprueba si el objetivo del clic es exactamente la superposición del lightbox (no la imagen dentro).
            lightbox.classList.remove('visible'); // Elimina la clase 'visible' para ocultar el lightbox.
            document.body.style.overflow = ''; // Restablece el 'overflow' del body para permitir el desplazamiento.
        }
    });

    // Cierra el lightbox cuando se presiona la tecla 'Escape'.
    document.addEventListener('keydown', (e) => { // Agrega un 'event listener' de pulsación de tecla a todo el documento.
        if (e.key === 'Escape' && lightbox.classList.contains('visible')) { // Comprueba si la tecla presionada es 'Escape' y si el lightbox está actualmente visible.
            lightbox.classList.remove('visible'); // Elimina la clase 'visible' para ocultar el lightbox.
            document.body.style.overflow = ''; // Restablece el 'overflow' del body para permitir el desplazamiento.
        }
    });
});
// Función para mostrar saludo automático
function mostrarSaludo() {
    const nombre = "Truchet"; // Cambia esto por tu nombre
    alert(`¡Bienvenido a mi perfil, ${nombre}!`);
}

// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const body = document.body;
    body.classList.toggle('fondo-alternativo');
    
    const boton = document.getElementById('cambiarColor');
    if (body.classList.contains('fondo-alternativo')) {
        boton.textContent = 'Restaurar color original';
    } else {
        boton.textContent = 'Cambiar color de fondo';
    }
}

// Función para manejar el formulario de contacto
function manejarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    if (nombre && comentario) {
        alert(`¡Gracias ${nombre}! Tu mensaje ha sido recibido:\n"${comentario}"`);
        // Limpiar el formulario
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
}

// Función que se ejecuta cuando la página se carga completamente
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar saludo automático solo en la página principal
    if (document.title.includes('Mi Perfil Web')) {
        setTimeout(mostrarSaludo, 1000); // Espera 1 segundo antes de mostrar el saludo
    }
    
    // Agregar event listener al botón de cambiar color si existe
    const botonCambiarColor = document.getElementById('cambiarColor');
    if (botonCambiarColor) {
        botonCambiarColor.addEventListener('click', cambiarColorFondo);
    }
    
    // Agregar event listener al formulario si existe
    const formulario = document.querySelector('.form-contacto');
    if (formulario) {
        formulario.addEventListener('submit', manejarFormulario);
    }
    
    // Efecto de hover para los elementos de la lista de intereses
    const intereses = document.querySelectorAll('.lista-intereses li');
    intereses.forEach(interes => {
        interes.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        interes.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animación suave para el scroll
    const enlaces = document.querySelectorAll('a[href^="#"]');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));
            if (destino) {
                destino.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Función adicional para crear un efecto de escritura en el nombre
function efectoEscritura(elemento, texto, velocidad = 100) {
    let i = 0;
    elemento.textContent = '';
    
    function escribir() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    
    escribir();
}

// Aplicar efecto de escritura al nombre si existe
window.addEventListener('load', function() {
    const nombreElemento = document.querySelector('.nombre-completo');
    if (nombreElemento) {
        const textoOriginal = nombreElemento.textContent;
        efectoEscritura(nombreElemento, textoOriginal, 150);
    }
});

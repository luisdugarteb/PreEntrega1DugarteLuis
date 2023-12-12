const nombre = prompt("¡Bienvenido! Por favor, ingresa tu nombre:");
alert("Hola, " + nombre + ". ¡Vamos a jugar!");

let vidas = 5;

function jugar() {
    const paisesCapitales = {
        "Argentina": "Buenos Aires",
        "Venezuela": "Caracas",
        "Brasil": "Brasilia",
        "Colombia": "Bogota",
        "Francia": "Paris",
        "Japón": "Tokio",
        "Italia": "Roma",
        "Bélgica": "Bruselas",
        "Dinamarca": "Copenhague",
        "Emiratos Árabes Unidos": "Abu Dabi",
        "España": "Madrid",
        "Ecuador": "Quito",
        "Finlandia": "Helsinki",
        "República Checa": "Praga"
        
        
    };

    const paises = Object.keys(paisesCapitales);
    const indicePais = Math.floor(Math.random() * paises.length);
    const paisSeleccionado = paises[indicePais];
    const capitalCorrecta = paisesCapitales[paisSeleccionado];

    let respuestaUsuario = prompt("¿Cuál es la capital de " + paisSeleccionado + "? (Vidas restantes: " + vidas + ")").trim();

    if (respuestaUsuario.toLowerCase() === capitalCorrecta.toLowerCase()) {
        alert("¡Correcto! ¡Has adivinado la capital.");
    } else {
        vidas--;
        if (vidas === 0) {
            alert("¡Perdiste todas tus vidas! A seguir estudiando las capitales del mundo.");
        } else {
            alert("Incorrecto. Te quedan " + vidas + " vidas.");
        }
    }

    if (vidas > 0) {
        jugar(); // Se vuelve a jugar si quedan vidas
    }
}

jugar();

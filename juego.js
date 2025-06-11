const textos = {
  es: {
    titulo: "Mi Juego",
    textoJugador: "Tú elegiste:",
    textoComputadora: "La computadora eligió:",
    resultadoEmpate: "¡Empate!",
    resultadoGanar: "¡Ganaste! 🎉",
    resultadoPerder: "La computadora gana. 😢",
    reglas: {
      piedra_tijera: "Piedra aplasta tijeras",
      piedra_lagarto: "Piedra aplasta lagarto",
      papel_piedra: "Papel cubre piedra",
      papel_spock: "Papel refuta a Spock",
      tijera_papel: "Tijeras cortan papel",
      tijera_lagarto: "Tijeras decapitan lagarto",
      lagarto_spock: "Lagarto envenena a Spock",
      lagarto_papel: "Lagarto come papel",
      spock_tijera: "Spock desintegra tijeras",
      spock_piedra: "Spock rompe piedra",
    }
  },
  en: {
    titulo: "My Game",
    textoJugador: "You chose:",
    textoComputadora: "Computer chose:",
    resultadoEmpate: "It's a tie!",
    resultadoGanar: "You win! 🎉",
    resultadoPerder: "Computer wins. 😢",
    reglas: {
      piedra_tijera: "Rock crushes scissors",
      piedra_lagarto: "Rock crushes lizard",
      papel_piedra: "Paper covers rock",
      papel_spock: "Paper disproves Spock",
      tijera_papel: "Scissors cut paper",
      tijera_lagarto: "Scissors decapitate lizard",
      lagarto_spock: "Lizard poisons Spock",
      lagarto_papel: "Lizard eats paper",
      spock_tijera: "Spock smashes scissors",
      spock_piedra: "Spock vaporizes rock",
    }
  },
  fr: {
    titulo: "Mon Jeu",
    textoJugador: "Tu as choisi :",
    textoComputadora: "L'ordinateur a choisi :",
    resultadoEmpate: "Égalité !",
    resultadoGanar: "Tu as gagné ! 🎉",
    resultadoPerder: "L'ordinateur gagne. 😢",
    reglas: {
      piedra_tijera: "La pierre écrase les ciseaux",
      piedra_lagarto: "La pierre écrase le lézard",
      papel_piedra: "Le papier couvre la pierre",
      papel_spock: "Le papier réfute Spock",
      tijera_papel: "Les ciseaux coupent le papier",
      tijera_lagarto: "Les ciseaux décapitent le lézard",
      lagarto_spock: "Le lézard empoisonne Spock",
      lagarto_papel: "Le lézard mange le papier",
      spock_tijera: "Spock détruit les ciseaux",
      spock_piedra: "Spock vaporise la pierre",
    }
  }
};

let idiomaActual = 'es';

const opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];

// Para mostrar emojis según opción
function emoji(opcion) {
  switch(opcion) {
    case 'piedra': return '🪨';
    case 'papel': return '📄';
    case 'tijera': return '✂️';
    case 'lagarto': return '🦎';
    case 'spock': return '🖖';
    default: return '';
  }
}

function actualizarIdioma() {
  const select = document.getElementById('idioma');
  idiomaActual = select.value;

  document.getElementById('titulo').textContent = textos[idiomaActual].titulo;

  // Actualizar botones (por si quieres traducir nombres)
  const botones = document.querySelectorAll('.botones button');
  botones.forEach(boton => {
    const opcion = boton.textContent.trim().toLowerCase();
    // Actualizamos el texto con el emoji + nombre en idioma actual
    // para eso, usamos emoji y el nombre traducido (opcional)
    let nombreTraducido = '';
    switch(boton.textContent.trim().toLowerCase()) {
      case '🪨 piedra': nombreTraducido = idiomaActual === 'es' ? 'Piedra' : idiomaActual === 'en' ? 'Rock' : 'Pierre'; break;
      case '📄 papel': nombreTraducido = idiomaActual === 'es' ? 'Papel' : idiomaActual === 'en' ? 'Paper' : 'Papier'; break;
      case '✂️ tijera': nombreTraducido = idiomaActual === 'es' ? 'Tijera' : idiomaActual === 'en' ? 'Scissors' : 'Ciseaux'; break;
      case '🦎 lagarto': nombreTraducido = idiomaActual === 'es' ? 'Lagarto' : idiomaActual === 'en' ? 'Lizard' : 'Lézard'; break;
      case '🖖 spock': nombreTraducido = idiomaActual === 'es' ? 'Spock' : idiomaActual === 'en' ? 'Spock' : 'Spock'; break;
      default: nombreTraducido = boton.textContent.trim();
    }
    // Cambiar texto del botón (emoji fijo + nombre traducido)
    const em = boton.textContent.trim().charAt(0); // emoji, aunque mejor fijo para cada
    switch(nombreTraducido.to


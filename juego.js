function jugar(eleccionJugador) {
  const opciones = ['piedra', 'papel', 'tijera', 'lagarto', 'spock'];
  const computadora = opciones[Math.floor(Math.random() * 5)];

  const reglas = {
    piedra: {
      tijera: "Piedra aplasta tijeras",
      lagarto: "Piedra aplasta lagarto"
    },
    papel: {
      piedra: "Papel cubre piedra",
      spock: "Papel desautoriza a Spock"
    },
    tijera: {
      papel: "Tijeras cortan papel",
      lagarto: "Tijeras decapitan lagarto"
    },
    lagarto: {
      papel: "Lagarto come papel",
      spock: "Lagarto envenena a Spock"
    },
    spock: {
      tijera: "Spock desintegra tijeras",
      piedra: "Spock rompe piedra"
    }
  };

  let mensaje = `
<div class="jugador"><span class="emoji">👤</span> Tú elegiste: <span class="emoji">${emoji(eleccionJugador)}</span></div>
<div class="computadora"><span class="emoji">💻</span> La computadora eligió: <span class="emoji">${emoji(computadora)}</span></div>

`;

if (eleccionJugador === computadora) {
  mensaje += `<div class="empate">Resultado: ¡Empate!</div>`;
} else if (reglas[eleccionJugador][computadora]) {
  const regla = reglas[eleccionJugador][computadora];
  mensaje += `<div class="ganador">Resultado: ¡Ganaste! 🎉</div>`;
  mensaje += `<strong>${regla}</strong>`;
} else {
  const regla = reglas[computadora][eleccionJugador];
  mensaje += `<div class="perdedor">Resultado: La computadora gana. 😢</div>`;
  mensaje += `<strong>${regla}</strong>`;
}



  document.getElementById("resultado").innerHTML = mensaje;
}

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

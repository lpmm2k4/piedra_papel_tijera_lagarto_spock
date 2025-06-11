function jugar(eleccionJugador) {
  const opciones = ['🪨', '📄', '✂️', '🦎', '🖖'];
  const nombres = {
    '🪨': 'Piedra',
    '📄': 'Papel',
    '✂️': 'Tijeras',
    '🦎': 'Lagarto',
    '🖖': 'Spock'
  };

  const ganaContra = {
    '🪨': ['✂️', '🦎'],
    '📄': ['🪨', '🖖'],
    '✂️': ['📄', '🦎'],
    '🦎': ['📄', '🖖'],
    '🖖': ['✂️', '🪨']
  };

  const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

  let resultado = '';
  if (eleccionJugador === eleccionComputadora) {
    resultado = "¡Empate!";
  } else if (ganaContra[eleccionJugador].includes(eleccionComputadora)) {
    resultado = "¡Tú ganas!";
  } else {
    resultado = "¡La computadora gana!";
  }

  document.getElementById("resultado").innerHTML =
    `<strong>Tú elegiste:</strong> ${eleccionJugador} ${nombres[eleccionJugador]}<br>
     <strong>La computadora eligió:</strong> ${eleccionComputadora} ${nombres[eleccionComputadora]}<br>
     <strong>Resultado:</strong> ${resultado}`;
}

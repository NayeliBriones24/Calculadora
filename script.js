/*
Ángela Nayeli Briones Pico
Fecha:29/05/2025
*/
function appendCharacter(char) {
  document.getElementById('display').value += char;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

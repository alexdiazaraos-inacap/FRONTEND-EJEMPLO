document.getElementById('btn').addEventListener('click', () => {
  alert('¡Funciona!');
});

const inputDireccion = document.getElementById('direccion');
document.getElementById('direccion').addEventListener('blur', () => {
  const valor = inputDireccion.value.trim();
  if (!valor) {
    alert('Por favor, ingresa tu dirección.');
    return;
  }
  alert('Dirección guardada: ${valor}');
});
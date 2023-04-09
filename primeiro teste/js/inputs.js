const pesoescrito = document.getElementById('pesoescrito');
const pesorange = document.getElementById('pesorange');

pesoescrito.addEventListener('input', function() {
  pesorange.value = this.value;
});

pesorange.addEventListener('input', function() {
  pesoescrito.value = this.value;
});

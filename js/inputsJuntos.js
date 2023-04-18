const pesoescrito = document.getElementById('pesoInput');
const pesorange = document.getElementById('pesoSlide');

pesoescrito.addEventListener('input', function() {
  if (pesoescrito.value > 99){
    pesorange.style.width = '150px'
    pesorange.value = this.value;
  } else {
    pesoescrito.style.width = '85px'
    pesorange.value = this.value;
  }
});

pesorange.addEventListener('input', function() {
  if (pesorange.value > 99){
    pesoescrito.style.width = '150px'
    pesoescrito.value = this.value;
  } else {
    pesoescrito.style.width = '85px'
    pesoescrito.value = this.value;
  }
});
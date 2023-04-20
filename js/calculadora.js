// seleciona os elementos do DOM
const pesoRange = document.getElementById('pesoSlide');
const pesoEscrito = document.getElementById('pesoInput');
const clima = document.getElementsByName('clima');
const atividades = document.getElementsByName('atividade');
const foco = document.getElementsByName('foco')
const metaAguaView = document.getElementById('meta');
const metaGarrafasView = document.getElementById('squee')
const metaAgua = 0
const metaGarrafas = 0


// adiciona um ouvinte de eventos para atualizar o resultado sempre que houver uma mudança nos inputs
pesoRange.addEventListener('input', calcularMetaAgua);
pesoEscrito.addEventListener('input', calcularMetaAgua);
clima.forEach(function(radio) {
    radio.addEventListener('change', calcularMetaAgua);
  });
atividades.forEach(function(radio) {
  radio.addEventListener('change', calcularMetaAgua);
});
foco.forEach(function(radio) {
  radio.addEventListener('change', calcularMetaAgua);
});

// função para calcular a meta de água e atualizar o texto
function calcularMetaAgua() {
  const peso = Number(pesoRange.value || pesoEscrito.value);
  let resultado = peso * 33;

  if (clima[1].checked) {
    resultado = peso * (33+3);
  }

  if (atividades[0].checked) {
    resultado = peso * (33+5);
  }

  if (foco[0].checked) {
    resultado = peso * (33+12);
  }

  if (clima[1].checked && atividades[0].checked) {
    resultado = peso * (33 + 3 + 5);
  }

  if (clima[1].checked && foco[0].checked) {
    resultado = peso * (33 + 3 + 12);
  }

  if (atividades[0].checked && foco[0].checked) {
    resultado = peso * (33 + 5 + 12);
  }

  if (clima[1].checked && atividades[0].checked && foco[0].checked) {
    resultado = peso * (33 + 5 + 3 +12);
  }

  resultado = resultado/1000
  

  // atualiza o texto do elemento h4 com o resultado
  if (resultado<2) {
    metaAgua.textContent = `Tome o mínimo ideal de 2 litros de água por dia`;  
  } else {
    metaAguaView.textContent = `Sua meta é de ${resultado.toFixed(1)} litros de água por dia`;
  }

}
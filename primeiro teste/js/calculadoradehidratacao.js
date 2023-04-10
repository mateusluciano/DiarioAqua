// seleciona os elementos do DOM
const pesoRange = document.getElementById('pesorange');
const pesoEscrito = document.getElementById('pesoescrito');
const atividades = document.getElementsByName('atividades');
const clima = document.getElementsByName('clima');
const metaAgua = document.getElementById('litros');

// adiciona um ouvinte de eventos para atualizar o resultado sempre que houver uma mudança nos inputs
pesoRange.addEventListener('input', calcularMetaAgua);
pesoEscrito.addEventListener('input', calcularMetaAgua);
atividades.forEach(function(radio) {
  radio.addEventListener('change', calcularMetaAgua);
});
clima.forEach(function(radio) {
  radio.addEventListener('change', calcularMetaAgua);
});

// função para calcular a meta de água e atualizar o texto
function calcularMetaAgua() {
  const peso = Number(pesoRange.value || pesoEscrito.value);
  let resultado = peso * 34;

  if (atividades[0].checked) {
    resultado += resultado * 0.15;
  }

  if (clima[0].checked) {
    resultado += resultado * 0.1;
  }

  // atualiza o texto do elemento h4 com o resultado
  if (resultado<2000) {
    metaAgua.textContent = `Tome o mínimo ideal de 2 litros de água por dia`;  
  } else {
    metaAgua.textContent = `Sua meta é de ${resultado.toFixed(0)} litros de água por dia`;
  }

}

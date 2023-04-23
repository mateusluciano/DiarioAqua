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
  if (resultado < 2) {
    metaAguaView.innerHTML = `Sua meta é de 2 litros<br>de água por dia!`;

    var garrafa2l = document.querySelector('#garrafas');
    garrafa2l.style.backgroundImage = 'url(../imagens/water/Bottles2l.png)';

    var fraseGarrafas = document.querySelector('#squee')
    fraseGarrafas.innerHTML = `beba 4 garrafas de 500<small>ml</small>`
} else {
    metaAguaView.innerHTML = `Sua meta é de ${resultado.toFixed(1)} litros<br>de água por dia!`;
  }

  // atualiza bg com quantidade de garrafas
  if (resultado > 2) {
    resultado = resultado * 1000

    let quantidade = resultado / 500; // Cálculo da quantidade de garrafas

    quantidade = Math.ceil(quantidade); // Arrendonda a quantidade para cima

    var fraseGarrafas = document.querySelector('#squee')
    fraseGarrafas.innerHTML = `beba ${quantidade} garrafas de 500<small>ml</small>`

    // backgrounds
    if (resultado > 2000 && resultado <= 2500) {
      var garrafa25 = document.querySelector('#garrafas');
      garrafa25.style.backgroundImage = 'url(../imagens/water/Bottles2.5l.png)';

    } else if (resultado > 2500 && resultado <= 3000) {
      var garrafa30 = document.querySelector('#garrafas');
      garrafa30.style.backgroundImage = 'url(../imagens/water/Bottles3l.png)';

    } else if (resultado > 3000 && resultado <= 3500) {
      var garrafa35 = document.querySelector('#garrafas');
      garrafa35.style.backgroundImage = 'url(../imagens/water/Bottles3.5l.png)';

    } else if (resultado > 3500 && resultado <= 4000) {
      var garrafa40 = document.querySelector('#garrafas');
      garrafa40.style.backgroundImage = 'url(../imagens/water/Bottles4l.png)';

    } else {
      var garrafaMuito = document.querySelector('#garrafas');
      garrafaMuito.style.backgroundImage = 'url(../imagens/water/BottlesMais4l.png)';
    }

  }
}
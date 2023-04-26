function carregarImagens(callback) {
    var garrafa2l = new Image();
    garrafa2l.src = 'imagens/water/2litros.png';
    
    var garrafa25 = new Image();
    garrafa25.src = 'imagens/water/Bottles2.5l.png';
    
    var garrafa30 = new Image();
    garrafa30.src = 'imagens/water/Bottles3l.png';
    
    var garrafa35 = new Image();
    garrafa35.src = 'imagens/water/Bottles3.5l.png';
    
    var garrafa40 = new Image();
    garrafa40.src = 'imagens/water/Bottles4l.png';
    
    var garrafaMuito = new Image();
    garrafaMuito.src = 'imagens/water/BottlesMais4l.png';
    
    var imagensCarregadas = 0;
    var totalImagens = 6;
    
    function verificarImagensCarregadas() {
      imagensCarregadas++;
      if (imagensCarregadas === totalImagens) {
        callback();
      }
    }
    
    garrafa2l.onload = verificarImagensCarregadas;
    garrafa25.onload = verificarImagensCarregadas;
    garrafa30.onload = verificarImagensCarregadas;
    garrafa35.onload = verificarImagensCarregadas;
    garrafa40.onload = verificarImagensCarregadas;
    garrafaMuito.onload = verificarImagensCarregadas;
  }
  
  window.addEventListener('load', function() {
    carregarImagens(function() {
      calcularMetaAgua();
    });
  });
  
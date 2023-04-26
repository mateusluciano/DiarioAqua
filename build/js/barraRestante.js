function atualizarBarraDeRegressao() {
    var downloadsRestantes = 100 - numeroDeDownloadsFeitos;
    var larguraDaBarra = downloadsRestantes + "%";

    if (downloadsRestantes < 50) {
        // Criar um novo elemento de parágrafo
        var paragrafo = document.createElement("p");
        // Adicionar texto ao parágrafo
        paragrafo.textContent = "Restantes: ";
        // Atribuir uma classe ao parágrafo
        paragrafo.className = "downloads-restantes";
        // Selecionar a div com a classe 'barra-de-regressao'
        var divBarraDeRegressao = document.querySelector(".barra-de-regressao");
        // Selecionar o parágrafo antigo, se existir
        var paragrafoAntigo = divBarraDeRegressao.querySelector("p.downloads-restantes");
        // Se houver um parágrafo antigo, removê-lo
        if (paragrafoAntigo) {
          divBarraDeRegressao.removeChild(paragrafoAntigo);
        }
        // Adicionar o novo parágrafo como filho da div
        divBarraDeRegressao.appendChild(paragrafo);

        paragrafo.style.color = '#39393A'
        paragrafo.style.textAlign = 'Right'

        document.querySelector(".downloads-restantes").innerHTML = "RESTANTES: " + downloadsRestantes;
        document.querySelector(".regressao").style.width = larguraDaBarra;

    } else {
        document.querySelector(".downloads-restantes").innerHTML = "RESTANTES: " + downloadsRestantes;
        document.querySelector(".regressao").style.width = larguraDaBarra;
    }
}
  
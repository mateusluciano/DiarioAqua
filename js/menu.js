function abrirmenu() {
    menu = document.querySelector('#menu')
    menu.style.display = 'block'
    menu.style.transition = 'transform 1s ease-in-out' // Adiciona a transição de 0.3 segundos com função de animação ease-in-out
    menu.style.transform = 'translateX(0)' // Move o menu 0 pixels na horizontal, fazendo com que ele deslize da esquerda para a direita

}

function fecharmenu() {
    setTimeout(function() { // Adiciona um pequeno delay para garantir que a animação termine antes de ocultar o menu
        menu.style.display = 'none'
        menu.style.transform = '' // Reseta a propriedade de transform após a animação
        menu.style.transition = '' // Reseta a propriedade de transição após a animação
    }, 300)
    
}
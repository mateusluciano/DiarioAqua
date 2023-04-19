function formatarTelefone() {
    let input = document.getElementById('whatsapp');
    let inputValue = input.value;
    // Remove qualquer caracter que não seja um número
    inputValue = inputValue.replace(/\D/g, '');
    // Adiciona parênteses, hífen e limita o tamanho do número
    if (inputValue.length > 0) {
        inputValue = '(' + inputValue.substring(0, 2) + ') ' +
                     inputValue.substring(2, 7) + '-' +
                     inputValue.substring(7, 11);
    }
    input.value = inputValue;
}
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede que a página seja recarregada
  
  const email = form.email.value;
  const password = form.password.value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Autenticação bem-sucedida
      const user = userCredential.user;
      console.log(`Usuário autenticado: ${user.email}`);
    })
    .catch((error) => {
      // Autenticação falhou
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Erro ao autenticar usuário: ${errorCode} - ${errorMessage}`);
    });
});

function onSignIn(googleUser) {
    // Recupere as informações do perfil do usuário
    var profile = googleUser.getBasicProfile();
  
    // Exiba o nome e a foto do usuário
    console.log("ID: " + profile.getId()); 
    console.log("Nome: " + profile.getName());
    console.log("Imagem URL: " + profile.getImageUrl());
  
    // Recupere o token de autorização do usuário
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: '347688088720-53pkm6ocbfun5er7cip5dbm5niofjuq1.apps.googleusercontent.com'
    });
  });
  
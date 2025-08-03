const user = [];

const form = document.getElementById("form-cadastro");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  const novoUsuario = {

    nome: nome,
    email: email,
    senha: senha,
    ativo: true
  };

  if (
    !novoUsuario.nome ||
    !novoUsuario.email ||
    !novoUsuario.senha
  ) {
    alert("Preencha todos os campos!");
  } else {
    user.push(novoUsuario);
  }

  console.log(user);

  form.reset();
});

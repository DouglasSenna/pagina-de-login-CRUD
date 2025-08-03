const user = [];

const formCadastro = document.getElementById("form-cadastro");
formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    ativo: true,
  };

  if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.senha) {
    alert("Preencha todos os campos!");
  } else {
    user.push(novoUsuario);
  }

  console.log(user);

  formCadastro.reset();
});

// login--------------------------------------

const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginNome = document.getElementById("login-name").value.trim();
  const loginSenha = document.getElementById("login-senha").value;

  if (!loginNome || !loginSenha) {
    alert("Preencha todos os campos!");
  } else {
    alert("Login realizado com sucesso!");
  }

  console.log(loginNome, loginSenha);

  formLogin.reset();
});

const btnCadastro = document.querySelector(".btnCadastro");
btnCadastro.addEventListener("click", () => {
  document.querySelector(".form-login").style.display = "none";
  document.querySelector(".form-cadastro").style.display = "flex";
});

const btnVoltar = document.querySelector(".btn-voltar");
btnVoltar.addEventListener("click", () => {
  document.querySelector(".form-login").style.display = "flex";
  document.querySelector(".form-cadastro").style.display = "none";
});

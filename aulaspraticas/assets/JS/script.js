//Area de Acesso
let usuarioEmail = document.querySelector("#inputEmail");
let usuarioSenha = document.querySelector("#inputPassword");
let emailOk = false;
let senhaOk = false;

//Entrar em Contato
let nome = document.querySelector("#exampleFormControlInput1");
let email = document.querySelector("#exampleFormControlInput2");
let assunto = document.querySelector('#exampleFormControlTextarea1');
let nomeOk = false;
let assuntoOk = false;

//Area de Acesso
function entrar() {
  let txtErro = document.querySelector(".txt-erro");
  if (
    usuarioEmail.value.indexOf("@") == -1 ||
    usuarioEmail.value.indexOf(".") == -1 ||
    usuarioSenha.value.length < 8
  ) {
    txtErro.innerHTML = "Usuário ou Senha inválidos";
    txtErro.style.color = "red";
  } else {
    txtErro.style.display = "none";
    emailOk = true;
    senhaOk = true;
    alert("Bem vindo!!")
  }
}

//Entrar em Contato
function validaNome() {
  let txtError = document.querySelector(".txt-error");
  if (nome.value.length < 3) {
    txtError.innerHTML = "Preencha com no mínimo 3 caracteres";
    txtError.style.color = "red";
    txtError.style.display = "block";
  } else {
    txtError.style.display = "none";
    nomeOk = true;
  }
}

function validaEmail() {
  let txtError = document.querySelector(".txt-error");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtError.innerHTML = "Email inválido";
    txtError.style.color = "red";
    txtError.style.display = "block";
  } else {
    txtError.style.display = "none";
    emailOk = true;
  }
}

function validaAssunto() {
    let txtAssunto = document.querySelector(".txt-error");
    if (assunto.value.length > 150) {
      txtAssunto.innerHTML = "Texto longo demais!";
      txtAssunto.style.color = "red";
      txtAssunto.style.display = 'block';
    } else {
      txtAssunto.style.display = 'none';
      assuntoOk = true;
    }
  }

  function enviar() {
    let txtBotao = document.querySelector(".txt-error");
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Preencha corretamente todos os campos!");
      txtBotao.innerHTML = "Preencha todos os campos corretamente";
      txtBotao.style.color = "red";
    }
  }
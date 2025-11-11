import { mascara } from "../validation/mascara.js";

export function testa_form() {
  var aluno = document.forms["formalunos"]["aluno"].value;
  var cpf = document.forms["formalunos"]["cpf"].value;

  if (aluno == "") {
    alert("Nome do aluno precisa ser informado.");

    document.forms["formalunos"]["aluno"].focus();

    return false;
  }

  if (cpf == "") {
    alert("CPF do aluno precisa ser informado");

    document.forms["formalunos"]["cpf"].focus();

    return false;
  }

  return true;
}

export function executeValidation() {
  const inputCpf = document.getElementById("cpf");
  const inputTelephone = document.getElementById("telefone");
  const inputCep = document.getElementById("cep");

  inputCpf.addEventListener("keypress", () => mascara(inputCpf));
  inputTelephone.addEventListener("keypress", () => mascara(inputTelephone));
  inputCep.addEventListener("keypress", () => mascara(inputCep));
}

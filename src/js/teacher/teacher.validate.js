import { mascara } from "../validation/mascara.js";

export function testa_form_professor() {
  var professor = document.forms["formprofessor"]["professor"].value;
  var cpf_prof = document.forms["formprofessor"]["cpf_prof"].value;
  var telefone_prof = document.forms["formprofessor"]["telefone_prof"].value;

  if (professor == "") {
    alert("Nome do professor precisa ser informado.");
    document.forms["formprofessor"]["professor"].focus();
    return false;
  }

  if (cpf_prof == "") {
    alert("CPF do professor precisa ser informado");
    document.forms["formprofessor"]["cpf_prof"].focus();
    return false;
  }

  if (telefone_prof == "") {
    alert("Telefone do professor precisa ser informado");
    document.forms["formprofessor"]["telefone_prof"].focus();
    return false;
  }

  return true;
}

export function executeValidationTeacher() {
  const inputCpf = document.getElementById("cpf_prof");
  const inputTelephone = document.getElementById("telefone_prof");

  inputCpf.addEventListener("keypress", (e) => mascara(inputCpf));
  inputTelephone.addEventListener("keypress", (e) => mascara(inputTelephone));
}

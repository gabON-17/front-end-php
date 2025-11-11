import { verifySex } from "../validation/verifySex.js";
import { apiPOST } from "../connection/api.post.js";

export async function createStudent() {
  const url = "http://localhost/api/src/server.php/students";
  const body = {
    name: document.getElementById("aluno").value,
    birth: document.getElementById("data").value,
    sex: verifySex(document.getElementsByName("sex")),
    cpf: document.getElementById("cpf").value,
    address: document.getElementById("endereco").value,
    complement: document.getElementById("complemento").value,
    cep: document.getElementById("cep").value,
    nearby: document.getElementById("bairro").value,
    city: document.getElementById("estado").value,
    telephone: document.getElementById("telefone").value,
  };

  const response = await apiPOST(url, body);
  return response;
}

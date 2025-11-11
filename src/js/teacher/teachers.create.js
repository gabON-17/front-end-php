import { apiPOST } from "../connection/api.post.js";
import { verifySex } from "../validation/verifySex.js";

export async function createTeacher() {
  const url = "http://localhost/api/src/server.php/teachers";

  const body = {
    name: document.getElementById("professor_name").value,
    sex: verifySex(document.getElementsByName("sex_prof")),
    cpf: document.getElementById("cpf_prof").value,
    telephone: document.getElementById("telefone_prof").value,
  };

  console.log(body.sex);
  const data = await apiPOST(url, body);
  return data;
}

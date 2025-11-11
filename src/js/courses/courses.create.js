import { apiPOST } from "../connection/api.post.js";

export async function createCourse() {
  const url = "http://localhost/api/src/server.php/courses";

  const body = {
    name: document.getElementById("nome_curso").value,
    description: document.getElementById("descricao_curso").value,
    teacher: document.getElementById("professor_curso").value,
  };

  const data = await apiPOST(url, body);
  return data;
}

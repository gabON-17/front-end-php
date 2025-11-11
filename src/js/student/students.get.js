import { apiGET } from "../connection/api.get.js";

export async function getStudents() {
  const url = "http://localhost/api/src/server.php/students";

  const data = await apiGET(url);
  return data;
}

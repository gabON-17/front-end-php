import { apiGET } from "../connection/api.get.js";

export async function getTeachers() {
  const url = "http://localhost/api/src/server.php/teachers";

  const data = await apiGET(url);
  return data;
}

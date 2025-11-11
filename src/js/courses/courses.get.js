import { apiGET } from "../connection/api.get.js";

export async function getCourses() {
  const url = "http://localhost/api/src/server.php/courses";

  const data = await apiGET(url);
  return data;
}

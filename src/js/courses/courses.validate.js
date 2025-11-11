import { mascara } from "../validation/mascara.js";

export function executeValidationCourse() {
  const inputCpf = document.getElementById("professor_curso");

  inputCpf.addEventListener("keypress", (e) => mascara(inputCpf));
}

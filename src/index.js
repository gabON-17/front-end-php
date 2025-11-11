import { createStudent } from "./js/student/students.create.js";
import { getStudents } from "./js/student/students.get.js";
import { createTeacher } from "./js/teacher/teachers.create.js";
import { getTeachers } from "./js/teacher/teachers.get.js";
import { executeValidationCourse } from "./js/courses/courses.validate.js";
import { createCourse } from "./js/courses/courses.create.js";
import { getCourses } from "./js/courses/courses.get.js";

import {
  testa_form_professor,
  executeValidationTeacher,
} from "./js/teacher/teacher.validate.js";

import {
  executeValidation,
  testa_form,
} from "./js/student/students.validate.js";

// ALUNOS
if (
  window.location.href ===
  "http://127.0.0.1:5500/public/pages/cadastro_aluno.html"
) {
  executeValidation();
  const form = document.getElementById("form_student");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    testa_form();
    const response = await createStudent();

    if (!response) console.log(response);

    console.log(response);
    form.reset();
  });
}

if (
  window.location.href ===
  "http://127.0.0.1:5500/public/pages/visualizar_alunos.html"
) {
  document.addEventListener("DOMContentLoaded", async (e) => {
    const response = await getStudents();
    const table = document.getElementById("tabela_alunos");

    document.getElementById("total_alunos").innerHTML = response.data.length;

    if (response) {
      table.innerHTML = "";
      for (let student of response.data) {
        const newLine = table.insertRow();
        let cont = 0;
        const keys = Object.keys(student);
        for (let key of keys) {
          const colum = newLine.insertCell(cont);

          colum.innerHTML = student[key];
          cont++;
        }
      }
    }
    return;
  });
}

// PROFESSOR
if (
  window.location.href ===
  "http://127.0.0.1:5500/public/pages/cadastro_professor.html"
) {
  const form = document.getElementById("form_professor");
  executeValidationTeacher();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    testa_form_professor();

    const response = await createTeacher();

    form.reset();
  });
}

if (
  window.location.href ===
  "http://127.0.0.1:5500/public/pages/visualizar_professores.html"
) {
  document.addEventListener("DOMContentLoaded", async (e) => {
    const response = await getTeachers();
    const table = document.getElementById("tabela_professores");

    document.getElementById("total_professores").innerHTML =
      response.data.length ?? 0;

    if (response) {
      table.innerHTML = "";
      for (let teacher of response.data) {
        const newLine = table.insertRow();
        let cont = 0;
        const keys = Object.keys(teacher);
        for (let key of keys) {
          const colum = newLine.insertCell(cont);
          if (key === "id") continue;
          colum.innerHTML = teacher[key];
          cont++;
        }
      }
    }
    return;
  });
}

// CURSO
if (
  window.location.href ===
  "http://127.0.0.1:5500/public/pages/cadastro_curso.html"
) {
  const form = document.getElementById("form_curso");
  executeValidationCourse();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const response = await createCourse();
    console.log(response);
    form.reset();
  });
}

if (
  window.location.href ===
    "http://127.0.0.1:5500/public/pages/visualizar_cursos.html" ||
  "http://localhost:5500/public/pages/visualizar_cursos.html"
) {
  document.addEventListener("DOMContentLoaded", async (e) => {
    const response = await getCourses();
    const table = document.getElementById("tabela_cursos");

    document.getElementById("total_cursos").innerHTML = response.data.length;

    if (response) {
      table.innerHTML = "";
      for (let course of response.data) {
        const newLine = table.insertRow();
        let cont = 0;
        const keys = Object.keys(course);
        for (let key of keys) {
          const colum = newLine.insertCell(cont);

          colum.innerHTML = course[key];
          cont++;
        }
      }
    }
    return;
  });
}

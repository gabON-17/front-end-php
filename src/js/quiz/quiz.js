import { getResponse } from "./getResponse.js";
import { quizquetionsIA } from "./questions.js";

const questionHeader = document.getElementsByName("header-quiz")[0];
const questionText = document.getElementById("question");
const responsesInput = document.getElementsByName("labelResponse");

const formQuiz = document.getElementById("form_quiz");
const button = document.getElementsByClassName("btn-primary")[0];

let question = 0;
const resClient = [];

document.addEventListener("DOMContentLoaded", (e) => {
  questionHeader.textContent = "Questão 1";
  questionText.textContent = quizquetionsIA[0].quetion;

  for (let i = 0; i < 4; i++) {
    responsesInput[i].innerHTML =
      `<input type='radio' name='response' class='required' value='${quizquetionsIA[question].responses[i]}' /> ` +
      quizquetionsIA[question].responses[i] +
      "<br>";
  }
});

formQuiz.addEventListener("submit", (e) => {
  e.preventDefault();

  const response = getResponse();
  resClient.push(response);

  if (question < 9) question++;
  if (question === 9) {
    button.value = "✅ Enviar";
  }

  questionHeader.textContent = `Questão ${question + 1}`;
  questionText.textContent = quizquetionsIA[question].quetion;

  for (let i = 0; i < 4; i++) {
    responsesInput[i].innerHTML =
      `<input type='radio' name='response' class='required' value='${quizquetionsIA[question].responses[i]}' /> ` +
      quizquetionsIA[question].responses[i] +
      "<br>";
  }

  console.log(resClient);
});

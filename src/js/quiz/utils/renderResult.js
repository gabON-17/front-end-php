import { quizquetionsIA } from "./questions.js";
import { resClient } from "../quiz.js";

export function renderResult() {
    const acerts = quizquetionsIA.filter((item, index) => item.answer === resClient[index]).length;
    const errors = quizquetionsIA.length - acerts;
    const percentage = Math.round((acerts / quizquetionsIA.length) * 100);

    document.getElementById('acertos').textContent = acerts;
    document.getElementById('erros').textContent = errors;
    document.getElementById('total').textContent = 10;
    document.getElementById('percentual').textContent = percentage + '%';
    document.getElementById('taxa').textContent = percentage + '%';
    document.getElementById('progressFill').style.width = percentage + '%';
}


// 
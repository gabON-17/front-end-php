import { quizquetionsIA } from "./questions.js";

export function renderResult(resClient, body) {
  let acerts = 0;
  for (let value of resClient) {
    if (value) acerts++;
  }
  const errors = quizquetionsIA.length - acerts;
  const percentage = Math.round((acerts / quizquetionsIA.length) * 100);
  body.classList.add("main");
  body.innerHTML = `    <div class="container-result">
      <h1>Resultado do Quiz</h1>

      <div class="results-container">
        <div class="result-card acertos">
          <h2 
            style="background: linear-gradient(135deg, #27ae60 0%, #229954 100%);"
          >Acertos</h2>
          <span class="number" id="acertos">0</span>
          <span class="label">Questões Corretas</span>
        </div>

        <div class="result-card erros">
          <h2 
            style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)"
          >Erros</h2>
          <span class="number" id="erros">0</span>
          <span class="label">Questões Incorretas</span>
        </div>
      </div>

      <div class="progress-container">
        <div class="progress-label">
          <span>Sua Performance</span>
          <span id="percentual">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progressFill" style="width: 80%"></div>
        </div>
      </div>

      <div class="summary">
        <p><strong>Total de Questões:</strong> <span id="total">10</span></p>
        <p><strong>Taxa de Acerto:</strong> <span id="taxa">0%</span></p>
      </div>
    </div>`;

  document.getElementById("acertos").textContent = acerts;
  document.getElementById("erros").textContent = errors;
  document.getElementById("total").textContent = 10;
  document.getElementById("percentual").textContent = percentage + "%";
  document.getElementById("taxa").textContent = percentage + "%";
  document.getElementById("progressFill").style.width = percentage + "%";
}

const CHAT_API_URL = "http://localhost:3000/";

const selectors = {
  page: "#chatbot-page",
  form: "#chat-form",
  input: "#chat-input",
  messages: "#chat-messages",
  status: "#chat-status",
  sendButton: "#chat-send",
};

const roles = {
  user: "Você",
  bot: "Assistente",
  error: "Sistema",
};

function ensureElements() {
  const elements = {
    page: document.querySelector(selectors.page),
    form: document.querySelector(selectors.form),
    input: document.querySelector(selectors.input),
    messages: document.querySelector(selectors.messages),
    status: document.querySelector(selectors.status),
    sendButton: document.querySelector(selectors.sendButton),
  };

  return Object.values(elements).every(Boolean) ? elements : null;
}

function appendMessage(container, text, type = "bot") {
  const li = document.createElement("li");
  li.classList.add("message", `message--${type}`);

  const sender = document.createElement("strong");
  sender.classList.add("message__sender");
  sender.textContent = roles[type] ?? roles.bot;

  const content = document.createElement("p");
  content.classList.add("message__text");
  content.textContent = text;

  li.appendChild(sender);
  li.appendChild(content);

  container.appendChild(li);
  container.scrollTop = container.scrollHeight;
}

async function requestAnswer(message) {
  const payload = { message };

  try {
    const response = await fetch(CHAT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "[chatbot] Falha na API:",
        response.status,
        response.statusText,
        errorText
      );
      throw new Error(
        `Falha ao consultar a API (${response.status}): ${errorText || "erro"}`
      );
    }

    const data = await response.json();
    console.log("[chatbot] Resposta da API:", data);
    return (
      data?.answer ||
      data?.message ||
      data?.response ||
      JSON.stringify(data, null, 2)
    );
  } catch (error) {
    // Tratamento específico para erros de CORS
    if (error.message.includes("CORS") || error.name === "TypeError") {
      throw new Error(
        "Erro de CORS: O servidor não permite requisições desta origem. " +
          "Configure o backend para aceitar requisições de http://127.0.0.1:5500 " +
          "adicionando os headers Access-Control-Allow-Origin."
      );
    }
    throw error;
  }
}

function updateStatus(statusElement, text) {
  statusElement.textContent = text;
}

function toggleForm(formElements, disabled) {
  formElements.input.disabled = disabled;
  formElements.sendButton.disabled = disabled;
}

export function initChatbot() {
  const elements = ensureElements();
  if (!elements) return;

  updateStatus(elements.status, "Pronto para conversar!");

  elements.form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = elements.input.value.trim();
    if (!message) return;

    appendMessage(elements.messages, message, "user");
    elements.input.value = "";
    elements.input.focus();

    updateStatus(elements.status, "Buscando resposta...");
    toggleForm(elements, true);

    try {
      const answer = await requestAnswer(message);
      appendMessage(elements.messages, answer, "bot");
      updateStatus(elements.status, "Pronto para a próxima pergunta.");
    } catch (error) {
      appendMessage(elements.messages, error.message, "error");
      updateStatus(
        elements.status,
        "Não foi possível responder. Tente novamente."
      );
    } finally {
      toggleForm(elements, false);
    }
  });

  elements.input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      elements.form.requestSubmit();
    }
  });
}

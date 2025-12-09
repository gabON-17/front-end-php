function initAudio() {
  const textInput = document.getElementById("text-audio");
  const speakButton = document.getElementById("audio");

  if (!textInput || !speakButton) return; // só inicializa na página de áudio

  speakButton.addEventListener("click", () => {
    const text = textInput.innerHTML;
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) => voice.lang === "pt-BR");

    window.speechSynthesis.speak(utterance);
  });
}

initAudio();

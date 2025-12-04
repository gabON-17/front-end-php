const textInput = document.getElementById("text-audio");
const speakButton = document.getElementById("audio");

speakButton.addEventListener("click", (e) => {
  const text = textInput.innerHTML;
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find((voice) => voice.lang === "pt-BR");

  window.speechSynthesis.speak(utterance);
});

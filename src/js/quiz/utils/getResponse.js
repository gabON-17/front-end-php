export function getResponse() {
  const radios = document.getElementsByName("response");
  let valor;
  for (const radio of radios) {
    if (radio.checked) {
      valor = radio.value;
      break;
    }
  }

  if (!valor) return false;
  return valor;
}

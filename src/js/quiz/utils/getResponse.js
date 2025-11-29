export function getResponse(correctResponse) {
  const radios = document.getElementsByName("response");
  let valor;

  for (const radio of radios) {
    if (radio.checked) {
      valor = radio.value;
      return valor === correctResponse;
    }
  }
  return false;
}

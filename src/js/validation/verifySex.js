export function verifySex(elements) {
  let value = undefined;

  for (let input of elements) {
    if (input.checked) {
      value = input.value;
      return value;
    }
  }
}

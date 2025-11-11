export function mascara(input) {
  var v = input.value;

  if (isNaN(v[v.length - 1])) {
    input.value = v.substring(0, v.length - 1);
    return;
  }
  var tipo = input.getAttribute("data-mask");

  if (tipo === "cpf") {
    input.setAttribute("maxlength", "14");
    if (v.length === 3 || v.length === 7) input.value += ".";
    if (v.length === 11) input.value += "-";
  }

  if (tipo === "cep") {
    input.setAttribute("maxlength", "9");
    if (v.length === 5) input.value += "-";
  }

  if (tipo === "cel") {
    input.setAttribute("maxlength", "14");

    if (v.length === 1) input.value = "(" + v;

    if (v.length === 3) input.value += ") ";

    if (v.length === 9) input.value += "-";
  }
}

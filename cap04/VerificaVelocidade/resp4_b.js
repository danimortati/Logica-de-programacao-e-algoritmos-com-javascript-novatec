const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velocidadePermitida = parseFloat(frm.inPermitida.value);
  const velocidadeCondutor = parseFloat(frm.inCondutor.value);

  if (velocidadeCondutor <= velocidadePermitida) {
    resp.innerText = "Situação: Sem multa";
  } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
    resp.innerText = "Situação: Multa leve";
  } else {
    resp.innerText = "Situação: Multa grave";
  }
});

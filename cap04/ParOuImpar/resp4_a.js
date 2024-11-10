const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = parseInt(frm.inNumero.value);

  if (numero % 2 === 0){
    resp.innerText = `O número ${numero} é par`;
  }else {
    resp.innerText = `O número ${numero} é ímpar`;
  }


});
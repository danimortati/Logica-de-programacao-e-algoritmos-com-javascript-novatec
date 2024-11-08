const frm = document.querySelector ("form");//Obtém elementos da página
const h3 = document.querySelector ("h3");

frm.addEventListener ("submit", (e) => {

    e.preventDefault(); //Evita o envio do form
    const numero = Number (frm.inNumero.value);//Obtém número digitado no form
    const raiz = Math.sqrt (numero); //Calcula a raiz quadrada do número

    if (Number.isInteger(raiz)){ //Se o valor for da raiz for um número inteiro
        h3.innerText = `Raiz: ${raiz}`;
    }else {
        h3.innerText = `Não há raiz exata para ${numero}`;
    }

})








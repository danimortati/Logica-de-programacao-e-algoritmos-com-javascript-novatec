// Seleciona os elementos do DOM
const form = document.querySelector("form");
const inFruta = document.getElementById("inFruta");
const inNumero = document.getElementById("inNumero");
const outFruta = document.querySelector(".outFruta");

// Adiciona um evento de submit ao formulário
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores dos campos
    const fruta = inFruta.value;
    const numero = Number(inNumero.value);

    // Valida os campos
    if (!fruta || numero <= 0 || isNaN(numero)) {
        outFruta.textContent = "Por favor, insira uma fruta e um número válido!";
        return;
    }

    // Gera a string repetida
    const resultado = Array(numero).fill(fruta).join(" * ");

    // Exibe o resultado
    outFruta.textContent = resultado;
});

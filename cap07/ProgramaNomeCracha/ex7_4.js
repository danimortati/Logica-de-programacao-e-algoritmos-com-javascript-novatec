const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value.trim(); //obtém o nome informado e retira espaços em branco do início e final da string

    if (!nome.includes(" ")) { //se o nome não (!) possuir espaço
        alert("Informe o nome completo...");
        return;
    }

    const priEspaco = nome.indexOf(" "); //posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" "); //posição do último espaço
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco); //copia nome e sobrenome usando os parâmetros do substr()

    resp.innerText = `Crachá: ${cracha}`;
})

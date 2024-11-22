const inputClube = document.getElementById('inputClube');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnTabela = document.getElementById('btnTabela');
const outLista = document.getElementById('outLista');

// Array para armazenar os clubes
let todosClubes = [];

// Função 1: Adicionar clube e listar
function adicionarClube() {
    let clube = inputClube.value.trim(); // Remove espaços extras

    if (clube === '') {
        alert('Por favor, insira o nome de um clube!');
        inputClube.focus();
        return;
    }

    todosClubes.push(clube); // Adiciona o clube ao array
    inputClube.value = ''; // Limpa o campo de entrada
    inputClube.focus(); // Foco no campo para o próximo clube

    listarClubes(); // Atualiza a lista dos clubes
}

// Função 2: Listar os clubes
function listarClubes() {
    if (todosClubes.length === 0) {
        alert('Não há clubes adicionados!');
        return;
    }

    let listaDeClubes = todosClubes.map((clube, index) => `${index + 1}. ${clube}`).join('\n');
    outLista.textContent = listaDeClubes;
}

// Função 3: Montar a tabela de jogos
function montarTabela() {
    if (todosClubes.length === 0) {
        alert('Adicione clubes antes de montar a tabela!');
        inputClube.focus();
        return;
    }

    if (todosClubes.length % 2 !== 0) {
        alert('Número ímpar de clubes! Adicione mais um para montar a tabela.');
        inputClube.focus();
        return;
    }

    let jogos = '';
    let totalClubes = todosClubes.length;

    for (let i = 0; i < totalClubes / 2; i++) {
        jogos += `${todosClubes[i]} x ${todosClubes[totalClubes - 1 - i]}\n`;
    }

    outLista.textContent = jogos; // Exibe os jogos no elemento
}

// Adiciona os eventos aos botões
btnAdicionar.addEventListener('click', adicionarClube);
btnListar.addEventListener('click', listarClubes);
btnTabela.addEventListener('click', montarTabela);



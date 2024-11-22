// Seleção dos elementos do DOM
const inputNumero = document.getElementById('inputNumero'); // Campo de entrada para o número
const btnAdicionar = document.getElementById('btnAdicionar'); // Botão para adicionar número
const btnVerificar = document.getElementById('btnVerificar'); // Botão para verificar ordem
const outNumeros = document.getElementById('outNumeros'); // Local onde será exibida a lista de números
const outTexto = document.getElementById('outTexto'); // Local onde será exibida a mensagem de verificação

// Declaração do array para armazenar os números
let todosNumeros = [];

// Função para adicionar um número ao array
function adicionarNumero() {
    let numero = Number(inputNumero.value); // Converte o valor do input para número

    // Validações:
    // - Se o campo está vazio
    // - Se o número já existe no array
    // - Se o valor não é um número válido
    if (inputNumero.value == '' || todosNumeros.indexOf(numero) >= 0 || isNaN(numero)) {
        alert('Digite um número válido!'); // Mostra um alerta em caso de erro
        inputNumero.value = ''; // Limpa o campo de entrada
        inputNumero.focus(); // Foco no campo de entrada para nova tentativa
        return;
    }

    // Adiciona o número ao array
    todosNumeros.push(numero);

    // Monta a lista de números para exibição
    let listaDeNumeros = '';
    let primeiroNumero = todosNumeros[0]; // Pega o primeiro número do array

    for (let index = 1; index < todosNumeros.length; index++) {
        listaDeNumeros += `, ${todosNumeros[index]}`; // Concatena os números em uma string
    }

    // Exibe a lista de números formatada
    outNumeros.textContent = `Números: ${primeiroNumero}${listaDeNumeros}`;
    outTexto.textContent = ''; // Limpa a mensagem de verificação anterior
    inputNumero.value = ''; // Limpa o campo de entrada
    inputNumero.focus(); // Coloca o foco no campo para nova entrada
}

// Adiciona o evento de clique ao botão "Adicionar"
btnAdicionar.addEventListener('click', adicionarNumero);

// Função para verificar se os números estão em ordem crescente
function verificarOrdem() {
    // Verifica se não há números no array
    if (todosNumeros.length == 0) {
        alert('Adicione algum número!'); // Alerta o usuário caso não tenha números
        return;
    }

    // Percorre o array comparando os números consecutivos
    for (let index = 0; index < todosNumeros.length - 1; index++) {
        // Se o número atual for menor que o próximo, está em ordem crescente
        if (todosNumeros[index] < todosNumeros[index + 1]) {
            outTexto.textContent = 'Os números estão em ordem crescente.'; // Exibe mensagem positiva
        } else {
            // Caso contrário, exibe mensagem de que a ordem não está crescente
            outTexto.textContent = 'Atenção... Os números não estão em ordem crescente!';
            return; // Sai da função assim que encontra um número fora de ordem
        }
    }
}

// Adiciona o evento de clique ao botão "Verificar"
btnVerificar.addEventListener('click', verificarOrdem);


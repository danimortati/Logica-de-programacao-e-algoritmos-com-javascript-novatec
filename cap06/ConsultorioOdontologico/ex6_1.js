// Lista de pacientes e variável para paciente em atendimento
let listaPacientes = [];
let emAtendimento = null;

// Adiciona paciente ao final da lista
document.getElementById("adicionar").addEventListener("click", () => {
  const inputPaciente = document.getElementById("paciente");
  const nomePaciente = inputPaciente.value.trim();

  if (nomePaciente === "") {
    alert("Por favor, insira o nome do paciente.");
    return;
  }

  listaPacientes.push(nomePaciente);
  inputPaciente.value = "";
  atualizarLista();
});

// Adiciona paciente como urgência (no início da lista)
document.getElementById("urgencia").addEventListener("click", () => {
  const inputPaciente = document.getElementById("paciente");
  const nomePaciente = inputPaciente.value.trim();

  if (nomePaciente === "") {
    alert("Por favor, insira o nome do paciente.");
    return;
  }

  listaPacientes.unshift(nomePaciente);
  inputPaciente.value = "";
  atualizarLista();
});

// Atende o próximo paciente (primeiro da lista)
document.getElementById("atender").addEventListener("click", () => {
  if (listaPacientes.length === 0) {
    alert("Nenhum paciente na lista de espera.");
    return;
  }

  emAtendimento = listaPacientes.shift();
  document.getElementById("emAtendimento").textContent = emAtendimento;
  atualizarLista();
});

// Atualiza a lista de pacientes no HTML
function atualizarLista() {
  const listaElement = document.getElementById("listaPacientes");
  listaElement.innerHTML = "";

  listaPacientes.forEach((paciente, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1} .  ${paciente}`;
    listaElement.appendChild(li);
  });
};
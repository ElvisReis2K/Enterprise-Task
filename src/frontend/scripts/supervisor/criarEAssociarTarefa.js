async function buscarFuncionarios() {
  try {
    const response = await fetch("http://localhost:3000/usuario/funcionarios");
    const data = await response.json();
    if (response.ok) {
      insereFuncionariosNoSelect(data)
    } else
      alert(
        data.mensagem ||
          data.erro ||
          data.error ||
          data.message ||
          "Ocorreu um erro."
      );
  } catch (error) {
    alert("Erro ao conectar com o servidor.");
  }
}
function insereFuncionariosNoSelect(funcionarios) {
  let select = document.getElementById("idFuncionario");
  funcionarios.forEach((func) => {
    const option = document.createElement("option");
    option.value = func.id;
    option.textContent = func.nome;
    select.appendChild(option);
  });
}
buscarFuncionarios();

async function criarTarefa(event) {
  event.preventDefault();
  const idSupervisor = document.getElementById("idSupervisor").value;
  const descricao = document.getElementById("descricaoTarefa").value;

  if (idSupervisor === "") {
    Swal.fire({
      title: "Digite o ID de um supervisor.",
      confirmButtonText: "OK",
    });
    return;
  }
  if (descricao === "") {
    Swal.fire({
      title: "Digite uma descrição para a tarefa.",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/supervisor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_supervisor: idSupervisor,
        descricao: descricao,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else
      alert(
        data.mensagem ||
          data.erro ||
          data.error ||
          data.message ||
          "Ocorreu um erro."
      );
  } catch (error) {
    alert("Erro ao fazer a requisição:\n" + error.message);
  }
}
async function associarTarefa(event) {
  event.preventDefault();
  const idFuncionario = document.getElementById("idFuncionario").value;
  const idTarefa = document.getElementById("idTarefa").value;
    console.log("idFuncionario é ",idFuncionario)
    console.log("idTarefa é ",idTarefa)
  if (idFuncionario === "") {
    Swal.fire({
      title: "Digite o ID de um funcionário.",
      confirmButtonText: "OK",
    });
    return;
  }
  if (idTarefa === "") {
    Swal.fire({
      title: "Digite o ID de uma tarefa.",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3000/supervisor/${idFuncionario}/${idTarefa}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      alert(data.mensagem);
    } else
      alert(
        data.mensagem ||
          data.erro ||
          data.error ||
          data.message ||
          "Ocorreu um erro."
      );
  } catch (error) {
    alert("Erro ao fazer a requisição:\n" + error.message);
  }
}
document
  .getElementById("formCriarTarefa")
  .addEventListener("submit", criarTarefa);
document
  .getElementById("formAssociarTarefa")
  .addEventListener("submit", associarTarefa);

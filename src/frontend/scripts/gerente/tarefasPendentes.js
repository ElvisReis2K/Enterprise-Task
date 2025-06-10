// Função para buscar e exibir as tarefas do supervisor
function visualizarTarefas(e) {
  e.preventDefault();
  const SupervisorID = document.getElementById("SupervisorID").value;
  if (SupervisorID === "") {
    Swal.fire({
      title: "Selecione um supervisor.",
      confirmButtonText: "OK",
    });
    return;
  }
  const url = `http://localhost:3000/gerente/${SupervisorID}`;
  console.log(SupervisorID); // Verifica a URL que está sendo chamada
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((responde) => responde.json())
    .then((data) => {
      const tarefas = Array.isArray(data) ? data : [data];
      const mensagem = data.mensagem || data.erro;
      if (mensagem) {
        alert(mensagem); // Exibe mensagem de erro ou sucesso
        return;
      }
      if (tarefas.length === 0) {
        Swal.fire({
          title: "Oops!",
          text: "Nenhuma tarefa encontrada deste supervisor.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
      const tarefaContainer = document.getElementById("tarefaContainer");
      tarefaContainer.innerHTML = ""; // Limpa o conteúdo anterior

      tarefas.forEach((tarefa) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${tarefa.id}</td>
        <td>${tarefa.id_supervisor}</td>
        <td>${tarefa.nome_supervisor}</td>
        <td>${tarefa.estaConcluida ? "Concluída" : "Pendente"}</td>
        <td>${
          tarefa.id_funcionário != null
            ? tarefa.id_funcionário
            : "Não atribuido"
        }</td>
        <td>${
          tarefa.nome_funcionario != null
            ? tarefa.nome_funcionario
            : "Não atribuido"
        }</td>
        <td>${tarefa.descricao}</td>
        `;
        tarefaContainer.appendChild(tr);
      });
      Swal.fire({
        title: "Sucesso!",
        text: "As tarefas foram buscadas.",
        icon: "success",
        confirmButtonText: "OK",
      });
    })
    .catch((error) => {
      Swal.fire({
        title: "Erro!",
        text: "Erro ao buscar as tarefas.",
        icon: "error",
        confirmButtonText: "OK",
      });
    });
}

// Função para filtrar as tarefas dos funcionários
function filtrar() {
    fetch("http://localhost:3000/gerente/pendentes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responde) => responde.json())
      .then((data) => {
        const tarefas = Array.isArray(data) ? data : [data];
        const mensagem = data.mensagem || data.erro;

        if (mensagem) {
          alert(mensagem); // Exibe mensagem de erro ou sucesso
          return;
        }
        if (tarefas.length === 0) {
          Swal.fire({
            title: "Oops!",
            text: "Nenhuma tarefa pendente encontrada.",
            icon: "error",
            confirmButtonText: "OK",
          });
          return;
        }
        const tarefaContainer = document.getElementById("tarefaContainerPendente");
        tarefaContainer.innerHTML = ""; // Limpa o conteúdo anterior

        tarefas.forEach((tarefa) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
                <td>${tarefa.id}</td>
                <td>${tarefa.id_supervisor}</td>
                <td>${tarefa.nome_supervisor}</td>
                <td>${tarefa.estaConcluida ? "Concluída" : "Pendente"}</td>
                <td>${
                  tarefa.id_funcionário != null
                    ? tarefa.id_funcionário
                    : "Não atribuido"
                }</td>
                <td>${
                  tarefa.nome_funcionario != null
                    ? tarefa.nome_funcionario
                    : "Não atribuido"
                }</td>
                <td>${tarefa.descricao}</td>
                `;
          tarefaContainer.appendChild(tr);
          Swal.fire({
          title: "Sucesso!",
          text: "As tarefas foram buscadas.",
          icon: "success",
          confirmButtonText: "OK",
        });
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro!",
          text: "Erro ao buscar as tarefas.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }


// Carregar todos os supervisores disponíveis
window.addEventListener("DOMContentLoaded", () => {
  const  selectSup = document.getElementById("SupervisorID");
  const tableTaf = document.getElementById("tarefaContainerPendente")
  if(selectSup){
    
    fetch("http://localhost:3000/usuario/supervisores", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responde) => responde.json())
      .then((sup) => {
        const Supervisor = document.getElementById("SupervisorID");
        sup.forEach((supervisor) => {
          const option = document.createElement("option");
          option.value = supervisor.id;
          option.textContent = `${supervisor.nome} (${supervisor.id})`;
          Supervisor.appendChild(option);
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Erro!",
          text: "Erro ao conectar com o servidor.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }
  if(tableTaf){
    filtrar();
  }
});

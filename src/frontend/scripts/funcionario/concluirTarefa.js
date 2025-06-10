document.getElementById("tarefaId").addEventListener("focus", carregarTarefas);


async function carregarTarefas(){
  try{
    const response = await fetch("http://localhost:3000/supervisor/tarefas/atribuidas");
    const data = await response.json();
    if(response.ok){
      let select = document.getElementById("tarefaId");
      data.forEach((tarefa)=>{
        const option = document.createElement("option");
        option.value = tarefa.id;
        option.textContent = tarefa.id + " - " + tarefa.descricao;
        select.appendChild(option);
      });
    } else {
      alert(
          data.mensagem ||
          data.erro ||
          data.error ||
          data.message ||
          "Ocorreu um erro."
        );
    }
  } catch (error){
    alert("Erro ao conectar com o servidor.");
  }
}

// Script para concluir tarefas de funcionários
async function concluirTarefa(e) {
  e.preventDefault();

  const tarefaID = document.getElementById("tarefaId").value;

  if (tarefaID === "") {
    Swal.fire({
      title: "Digite o ID de uma tarefa.",
      confirmButtonText: "OK",
    });
    return;
  }

  const url = `http://localhost:3000/funcionario/${tarefaID}`;

  try {
    const resposta = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: tarefaID }),
    });

    const data = await resposta.json(); // sempre tente ler o corpo antes de sair da função

    if (resposta.ok) {
      Swal.fire({
        title: "Sucesso!",
        text: "Tarefa marcada como concluída",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Erro!",
        text: data.mensagem || data.erro || "Ocorreu um erro.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }

    console.log(data); // útil para debug

  } catch (erro) {
    console.error("Erro encontrado:", erro);
    Swal.fire({
      title: "Erro!",
      text: "Erro ao conectar com o servidor.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
}

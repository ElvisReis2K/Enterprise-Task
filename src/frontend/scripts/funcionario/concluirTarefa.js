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

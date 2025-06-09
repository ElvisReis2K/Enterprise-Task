window.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/gerente/funcionariosdisponiveis", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((responde) => responde.json())
    .then((funcionarios) => {
      console.log(funcionarios); // Verifica os dados recebidos
      const mensagem = funcionarios.mensagem || funcionarios.erro;
      if (mensagem) {
        alert(mensagem); // Exibe mensagem de erro ou sucesso
        return;
      }
      if (funcionarios.length === 0) {
        Swal.fire({
          title: "Oops!",
          text: "Nenhum funcionário está sem tarefas pendentes.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
      console.log("Chegou aqui 1")
      const FuncionarioContainer = document.getElementById(
        "FuncionarioContainer"
      );
      console.log("Chegou aqui 2")
      if(FuncionarioContainer===null)return
      FuncionarioContainer.innerHTML = ""; // Limpa o conteúdo anterior
      console.log("Chegou aqui 3")
      funcionarios.forEach((funcionario) => {
        console.log("Chegou aqui 4")
        const tr = document.createElement("tr");
        console.log("Chegou aqui 5")
        tr.innerHTML = `
                <td>${funcionario.id}</td>
                <td>${funcionario.nome}</td>
                
            `;
        FuncionarioContainer.appendChild(tr);
        console.log("Chegou aqui 6")
      });
      console.log("Chegou aqui 7")
    })
    .catch((error) => {
      Swal.fire({
          title: "Erro!",
          text: "Erro ao conectar com o servidor.",
          icon: "error",
          confirmButtonText: "OK",
        });
    });
});

// Função para visualizar o status da tarefa

function visualizarStatusTarefa(e){
    e.preventDefault();

const funcionarioID = document.getElementById('funcionarioID').value;

if(funcionarioID===""){
    Swal.fire({
          title: "Selecione um funcionário.",
          confirmButtonText: "OK",
        });
    return
}

const url = `http://localhost:3000/funcionario/${funcionarioID}`

fetch(url ,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(responde => responde.json())
.then(data => {
    const tarefas = Array.isArray(data) ? data : [data];
    const mensagem = data.mensagem || data.erro;

    if (mensagem) {
        alert(mensagem); // Exibe mensagem de erro ou sucesso
        return;
    }
    if (tarefas.length === 0) {
        Swal.fire({
          title: "Oops!.",
          text:"Nenhuma tarefa encontrada para este funcionário.",
          icon:"error", 
          confirmButtonText: "OK",
        });
        return;
    }
    const tarefaContainer = document.getElementById('tarefaContainer');
    tarefaContainer.innerHTML = ''; // Limpa o conteúdo anterior

    tarefas.forEach(tarefa => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${tarefa.id}</td>
        <td>${tarefa.id_supervisor}</td>
        <td>${tarefa.nome_supervisor}</td>
        <td>${tarefa.estaConcluida ? 'Concluída' : 'Pendente'}</td>
        <td>${tarefa.id_funcionário}</td>
        <td>${tarefa.nome_funcionario}</td>
        <td>${tarefa.descricao}</td>
        `;
        tarefaContainer.appendChild(tr);
    });
    Swal.fire({
          title: "Sucess!.",
          text:"Tarefas buscadas com sucesso!",
          icon:"success", 
          confirmButtonText: "OK",
        });
})
.catch(error => {
    Swal.fire({
          title: "Erro!.",
          text:"Erro ao buscar as tarefas.",
          icon:"error", 
          confirmButtonText: "OK",
        });
});
}

// carregar todos os funcionários ao carregar a página
window.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:3000/usuario/funcionarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(responde => responde.json()).then(funcionarios => {
        const Funcionario = document.getElementById('funcionarioID');
        funcionarios.forEach(funcionario =>{
            const option = document.createElement('option');
            option.value = funcionario.id;
            option.textContent = `${funcionario.nome} (${funcionario.id})`;
            Funcionario.appendChild(option);
        });
    }
).catch(error => {
        Swal.fire({
          title: "Erro!.",
          text:'Erro ao conectar com o servidor.',
          icon:"error", 
          confirmButtonText: "OK",
        });
    });
})

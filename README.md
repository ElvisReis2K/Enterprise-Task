# Enterprise-Task
Sistema para acompanhamento de tarefas de funcionários para empresas.

## Integrantes
Segue a lista dos integrantes da equipe:
- Elvis Oliveira dos Reis - RA: 1272318921
- Luiz Henrique dos Santos Conceição - RA: 12724141299
- Marcos Guilherme Silva da Cruz  RA: 12723213780
- Natan Oliveira da Silva - RA: 12723211400
- Paulo Vitor Moreira dos Santos - RA: 12723111472

---

## Instruções de instalação e execução do projeto.

---

### ✅ Requisitos do Sistema

#### 🖥️ Sistema Operacional
- Windows 10 ou Windows 11

#### 🔧 Dependências

- **Git** instalado e configurado com suas credenciais  
  👉 [Download do Git](https://git-scm.com/downloads)

- **Node.js** versão `22.x` e **npm** versão `10.x`  
  👉 Baixe o instalador (Node.js + npm) diretamente:  
  [Node.js v22.16.0 - Windows x64 (.msi)](https://nodejs.org/dist/v22.16.0/node-v22.16.0-x64.msi)

---

### ⚠️ Permitir Execução de Scripts no PowerShell

Alguns comandos do Node.js exigem permissões adicionais no Windows:

1. Abra o **PowerShell como Administrador**.
2. Execute o comando abaixo:

```powershell
Set-ExecutionPolicy RemoteSigned
```

3. Quando aparecer o aviso de segurança, pressione:
   - `S` (Sim) ou `A` (Sim para todos)

---

### 📥 Clonando o Projeto

1. Escolha uma pasta de sua preferência.
2. Abra o terminal nessa pasta.
3. Execute o comando abaixo:

```bash
git clone https://github.com/ElvisReis2K/Enterprise-Task
```

---

### 🔧 Rodando o Backend

1. Navegue até a pasta da API:

```bash
cd Enterprise-Task/src/API
```

2. Instale as dependências:

```bash
npm install
```

> Aguarde o término da instalação antes de continuar.

3. Inicie o servidor:

```bash
npm run dev
```

✅ O backend estará rodando e pronto para uso.

---

### 🌐 Acessando o Frontend

1. Com o servidor rodando, abra a pasta do projeto clonado.
2. Siga o caminho:

```
Enterprise-Task/src/frontend/views
```

3. Abra o arquivo `home_page.html` com seu navegador preferido.

---

### 📄 Documentações Adicionais
Esta documentação possui duas documentações anexas que fecilitarão a compreensão do projeto.

- [Documentação do front-end](https://github.com/ElvisReis2K/Enterprise-Task/blob/main/src/frontend/Documenta%C3%A7%C3%A3o%20Front.md)
- [Documentação da API]()


---

## Justificativa da Aordagem de Comunicação Escolhida
Escolhemos fazer uma API porque, dentre as opções mencionadas pelo professor (Sockets, API, RPC etc.), APIs eram a abordagem de comunicação com que tínhamos maior familiaridade. Além disso, APIs são uma abordagem mais adequada do que RPC e Sockets para a nossa necessidade porque oferecem uma abstração clara e simples, facilitando o desenvolvimento e a manutenção ao esconder detalhes complexos da comunicação. Além disso, APIs baseadas em HTTP são amplamente compatíveis com diversas linguagens e plataformas, garantindo maior interoperabilidade entre sistemas heterogêneos. Por fim, elas promovem melhor escalabilidade e segurança, com suporte maduro para autenticação, controle de acesso e monitoramento, tornando a gestão e a expansão dos serviços mais eficientes do que soluções baseadas diretamente em RPC ou Sockets.

function limpar(){
    let tabela = document.querySelector('tbody');
    let i;
    for (i = tabela.rows.length - 1; i >= 0; i--) {
        tabela.deleteRow(i);
    }
}

function atualizar(id){
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
    let nomeForm = form.querySelector("input[name='nome']").value;
    let anoForm = form.querySelector("input[name='ano']").value;
    let potenciaForm = form.querySelector("input[name='potencia']").value;
    let precoForm = form.querySelector("input[name='preco']").value;
    let fabricanteForm = form.querySelector("input[name='fabricante']").value;

    let configuracoes = {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: nomeForm,
            ano: anoForm,
            potencia: potenciaForm,
            preco: precoForm,
            fabricante: fabricanteForm
        })
    }

    fetch("https://ifsp.ddns.net/webservices/carro/carro",configuracoes).then(response => {
        if(!response){
            throw new Error("Houve algum erro");
        }
        return response.json();
    }).then(data => {
        limpar();
        criarLinha();
    }).catch(erro=>{
        console.error("Erro encontrado: ",erro)
    })
}

function deletar(id){
    let configuracoes = {
        method: 'DELETE'
    }

    fetch(`https://ifsp.ddns.net/webservices/carro/carro/${id}`,configuracoes).then(response => {
        if(!response){
            throw new Error("Houve algum erro");
        }
        return response.json();
    }).then(data => {
        limpar();
        criarLinha();
    }).catch(erro=>{
        console.error("Erro encontrado: ",erro)
    })
}

function enviaForm(e){
    e.preventDefault();
    let form = e.target;

    let nomeForm = form.querySelector("input[name='nome']").value;
    let anoForm = form.querySelector("input[name='ano']").value;
    let potenciaForm = form.querySelector("input[name='potencia']").value;
    let precoForm = form.querySelector("input[name='preco']").value;
    let fabricanteForm = form.querySelector("input[name='fabricante']").value;

    let configuracoes = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: nomeForm,
            ano: anoForm,
            potencia: potenciaForm,
            preco: precoForm,
            fabricante: fabricanteForm
        })
    }

    fetch("https://ifsp.ddns.net/webservices/carro/carro",configuracoes).then(response => {
        if(!response){
            throw new Error("Houve algum erro");
        }
        return response.json();
    }).then(data => {
        limpar();
        criarLinha();
    }).catch(erro=>{
        console.error("Erro encontrado: ",erro)
    })
}

function criarLinha(){
    let tabela = document.querySelector('tbody');
    fetch("https://ifsp.ddns.net/webservices/carro/carro").then(response => {
        if(!response){
            throw new Error("Houve algum erro");
        }
        return response.json();
    }).then(data => {
        let novaLinha;
        let buttonDelete = document.createElement('button');
        buttonDelete.textContent = "Deletar";
        let buttonUpdate =document.createElement('button')
        buttonUpdate.textContent = "Atualizar";
        let botoes = document.createElement('div');

        data.forEach(element => {
            novaLinha = tabela.insertRow();
            for(const atributo in element){
                novaLinha.insertCell().textContent = element[atributo];
            }
            buttonDelete.addEventListener('click', (e) => {
                deletar(element.id);
            });

            buttonUpdate.addEventListener('click',(e) => {
                atualizar(element.id);
            });

            botoes.append(buttonDelete);
            botoes.append(buttonUpdate);

            novaLinha.insertCell().append()
        });
    }).catch(erro=>{
        console.error("Erro encontrado: ",erro)
    })
}

function configurar(){
    let form = document.querySelector('form');
    criarLinha();
    form.addEventListener('submit',enviaForm);
}

document.addEventListener('DOMContentLoaded',configurar);
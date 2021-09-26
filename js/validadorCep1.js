/*'use strict'

const pesquisarCep = async() => {
    const ccep = document.getElementById('ccep').value;
    const url = 'http://viacep.com.br/ws/${ccep}/json/';
    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log (endereco)
}

document.getElementById('ccep').addEventListener('focusout', pesquisarCep);*/

'use strict';

const limparFormulario = (endereco) =>{
    document.getElementById('crua').value = '';
    document.getElementById('cbai').value = '';
    document.getElementById('ccid').value = '';
    document.getElementById('cest').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('crua').value = endereco.logradouro;
    document.getElementById('cbai').value = endereco.bairro;
    document.getElementById('ccid').value = endereco.localidade;
    document.getElementById('cest').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('ccep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}

document.getElementById('ccep')
        .addEventListener('focusout',pesquisarCep);
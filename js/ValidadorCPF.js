function validaCPF(ccpf) {
    if (ccpf.length != 11) {
        return false;
    } else {

        var numeros = ccpf.substring(0, 9);
        var digitos = ccpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i++) {
            soma += numeros.charAt(10 - i) * i;
        }
        

        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitos.charAt(0)) {
            return false;
        }

        soma = 0;
        numeros = ccpf.substring(0,10);

        for (var j = 11; j > 1; j--) {
            soma += numeros.charAt(11 - j) * j;
        }
        

        var resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);   

        if(resultado != digitos.charAt(1)){
            return false;
        }
       
        return true;
    }
}

function validacao() {
    console.log('Iniciando Validação CPF');
    var ccpf = document.getElementById('ccpf').value

    var resultadoValidacao = validaCPF(ccpf);

    if (resultadoValidacao) {
        document.getElementById('success');
    }
    else {
        document.getElementsByID('error');
    }
}
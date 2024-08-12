document.getElementById('formAlterarSenha').addEventListener('submit', function(event) {
event.preventDefault(); //Evita o envio padrao do formulario

//Simulação de confrimação
var senhaAtual = document.getElementById("senhaAtual").value;
var novaSenha = document.getElementById('novaSenha').value;
alert("Senha Atual : ${senhaAtual}"\nnovaSenha: ${novaSenha}\novaSenha(simulação - sem backend));
    
})
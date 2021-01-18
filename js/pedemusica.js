

function enviaPedido(){
    var nome = document.getElementById('nameForm').value
    var apelido = document.getElementById('apelidoForm').value
    var rua = document.getElementById('ruaForm').value
    var cidade = document.getElementById('cidadeForm').value
    var estado = document.getElementById('estado').value
    var musica = document.getElementById('nomeMusicaForm').value
    var banda = document.getElementById('nomeBandaForm').value

    var presult = document.getElementById('result')
    
    presult.innerHTML = "Bem vindo à nossa rádio, " + nome + ", também conhecido como " + apelido + ".<br>Seu pedido para a música <strong>" + musica + "</strong> de <strong>" + banda + `</strong> foi enviado com sucesso <br>e será oferecido diretamente para a rua ${rua} em ${cidade} - ${estado}` 
    
}

function emailCheck(){
    var at = document.getElementById("email").value.indexOf("@");
    submitOK = "true";
    if (at == -1) {
        var emailC = document.getElementById("emailCheck")
        emailC.innerHTML = "Este email é inválido"
        submitOK = "false";
      }
    if (submitOK == "false") {
        return false;
    } 
}
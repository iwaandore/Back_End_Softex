function cadastrar() {
    var verifica = document.getElementById('data', 'telefone', 'cpf', 'email', 'nome').value

    if (verifica == '') {
        alert('Error')
    } else {
        location.href = 't2.html'
    }
}
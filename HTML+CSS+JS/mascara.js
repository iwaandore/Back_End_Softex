function mascara_cpf() {
    var CPF = document.getElementById("cpf")
    if (CPF.value.length == 3 || CPF.value.length == 7) {
        CPF.value += '.'
    } else if (CPF.value.length == 11) {
        CPF.value += '-'
    }
}
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

function mascara_data() {
    var DATA = document.getElementById("data")
    if (DATA.value.length == 2 || DATA.value.length == 5) {
        DATA.value += '/'
    }
}

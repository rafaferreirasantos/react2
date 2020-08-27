function validateCPF(cpf) {
  if (cpf.length !== 11) {
    return { isValid: false, msg: "O CPF deve possuir 11 dígitos." }
  }
  return { isValid: true, msg: "CPF válido." }
}
function validatePassword(pass) {
  if (pass.length < 4 || pass.lenght > 72) {
    return { isValid: false, msg: "A senha deve ter entre 4 e 72 dígitos." }
  }
  return { isValid: true, msg: "" }
}
function validateCEP(cep) {
  if (cep.length !== 8) {
    return { isValid: false, msg: "O CEP deve conter 8 dígitos." }
  }
  return { isValid: true, msg: "" }
}
export { validateCPF, validatePassword, validateCEP };
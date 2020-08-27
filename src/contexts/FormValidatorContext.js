import React from 'react';
const FormValidatorContext = React.createContext({
  //Este é o comportamento PADRÃO quando não for definido um provider de um contexto. 
  //Você pode testar, excluindo o provider do App.js e verificar que não haverá validação NEM ERROS no campo de CPF e SENHA.
  cpf: { isValid: true, msg: '' },
  password: noValidation,
});
function noValidation(value) {
  return { isValid: true, msg: '' }
}
export default FormValidatorContext;

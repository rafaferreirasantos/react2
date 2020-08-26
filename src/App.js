import React from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import { Typography, Container } from '@material-ui/core';
// import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant="h3" component="h1" color="primary" align="center">Formulário de Cadastro</Typography>
      <Formulario callBack={GetFormData} validateCPF={ValidaCPF} />
    </Container>
  );
}
function GetFormData(data) {
  console.log(data);
}
function ValidaCPF(cpf) {
  console.log("Validando CPF");
  if (cpf.length !== 11) {

    return { valido: false, msg: "O CPF deve possuir 11 dígitos." }
  }
  return { valido: true, msg: "CPF válido." }
}
export default App;

import React from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import { Typography, Container } from '@material-ui/core';
import { validateCPF, validatePassword, validateCEP } from './models/cadastro';
import 'fontsource-roboto'
import FormValidatorContext from './contexts/FormValidatorContext';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" color="primary" align="center">Formulário de Cadastro</Typography>
      <FormValidatorContext.Provider value={
        {
          cpf: validateCPF,
          password: validatePassword,
          cep: validateCEP
        }
      }>
        <Formulario />
      </FormValidatorContext.Provider>
    </Container>
  );
}
export default App;

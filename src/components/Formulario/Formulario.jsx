import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { useEffect } from 'react';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
function Formulario({ validators }) {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const etapas = [
    <DadosUsuario callBack={nextStep} validators={validators} />,
    <DadosPessoais callBack={nextStep} validators={validators} />,
    <DadosEntrega callBack={nextStep} validators={validators} />,
    <Typography variant="h5" color="primary" align="center">Cadastro efetuado com sucesso!</Typography>,
  ]
  useEffect(() => {
    if (etapa === etapas.length - 1) {
      console.log(dadosColetados);
    }
  })
  return (
    <>
      <Stepper activeStep={etapa}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Concluído</StepLabel></Step>
      </Stepper>
      {formAtual(etapa)}
    </>
  )
  function formAtual(etapa) {
    return etapas[etapa];
  }
  function nextStep(value) {
    coletaDados(value);
    setEtapa(etapa + 1);
  }
  function coletaDados(value) {
    setDados({ ...dadosColetados, ...value });
  }
}
export default Formulario;
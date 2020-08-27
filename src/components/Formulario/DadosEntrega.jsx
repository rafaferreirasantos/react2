import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import FormValidatorContext from '../../contexts/FormValidatorContext';
export default function DadosEntrega({ callBack }) {
  const validators = useContext(FormValidatorContext);
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUF] = useState("");
  const [erros, setErros] = useState({
    cep: {
      isValid: true,
      msg: '',
    }
  });
  function validate(event) {
    const { name, value } = event.target;
    const result = validators[name](value);
    setErros({ ...erros, [name]: result })

  }
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (Object.keys(erros).filter(key => erros[key].isValid === false).length === 0) {
        callBack({ cep, endereco, numero, municipio, uf });
      }
    }}>
      <TextField
        name="cep"
        label="CEP"
        type="number"
        fullWidth={true}
        variant="outlined"
        margin="normal"
        error={!erros.cep.isValid}
        helperText={erros.cep.msg}
        value={cep}
        onChange={(event) => {
          setCEP(event.target.value);
        }}
        onBlur={validate}
      />
      <TextField
        type="text"
        label="Endereço"
        fullWidth={true}
        variant="outlined"
        margin="normal"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id="number"
        type="number"
        label="Número"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id="uf"
        type="text"
        label="Estado"
        variant="outlined"
        margin="normal"
        value={uf}
        onChange={(event) => {
          setUF(event.target.value);
        }}
      />
      <TextField
        id="municipio"
        type="text"
        label="Município"
        variant="outlined"
        margin="normal"
        fullWidth={true}
        value={municipio}
        onChange={(event) => {
          setMunicipio(event.target.value);
        }}
      />
      <br /><br />
      <Button fullWidth={true} type="submit" variant="contained" color="primary">Finalizar Cadastro</Button>
    </form>
  );
}
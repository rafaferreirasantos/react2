import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import FormValidatorContext from '../../contexts/FormValidatorContext'
import useErrors from '../../hooks/useErrors';
function DadosPessoais({ callBack }) {
  const validators = useContext(FormValidatorContext);
  const [erros, validate] = useErrors(validators);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (Object.keys(erros).filter(key => erros[key].isValid === false).length === 0) {
        callBack({ nome, sobrenome, cpf, promocoes, novidades });
      }
    }}>
      <TextField
        name="nome"
        required={true}
        label="Nome"
        value={nome}
        fullWidth={true}
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
        }} />

      <TextField
        name="sobrenome"
        required={true}
        fullWidth={true}
        value={sobrenome}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        onChange={(event) => {
          setSobrenome(event.target.value);
        }} />

      <TextField
        name="cpf"
        required={true}
        fullWidth={true}
        value={cpf}
        label="CPF"
        variant="outlined"
        margin="normal"
        error={!erros.cpf.isValid}
        helperText={erros.cpf.msg}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={validate} />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch name="promocoes" checked={promocoes} onChange={(event) => {
            setPromocoes(event.target.checked);
          }} />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch name="novidades" checked={novidades} onChange={(event) => {
            setNovidades(event.target.checked);
          }} />
        }
      />
      <Button type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  )
}
export default DadosPessoais;
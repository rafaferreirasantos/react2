import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import FormValidatorContext from '../../contexts/FormValidatorContext';
import useErrors from '../../hooks/useErrors';
export default function DadosUsuario({ callBack }) {
  const validators = useContext(FormValidatorContext);
  const [erros, validate] = useErrors(validators);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(event => {
      event.preventDefault();
      if (Object.keys(erros).filter(key => erros[key].isValid === false).length === 0) {
        callBack({ email, password });
      }
    })}>
      <TextField
        id="email"
        required
        label="Email"
        type="email"
        fullWidth={true}
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        required
        name="password"
        label="Senha"
        type="password"
        fullWidth={true}
        variant="outlined"
        margin="normal"
        value={password}
        error={!erros.password.isValid}
        helperText={erros.password.msg}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validate}
      />
      <br /><br />
      <Button fullWidth={true} type="submit" variant="contained" color="primary">Próximo</Button>
    </form>
  );
}
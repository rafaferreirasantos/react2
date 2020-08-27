import { useState } from 'react';
function useErrors(validators) {
  const [erros, setErros] = useState(initialize(validators));
  function validate(event) {
    const { name, value } = event.target;
    const result = validators[name](value);
    setErros({ ...erros, [name]: result });
  }
  return [erros, validate];
}
function initialize(validators) {
  const result = {};
  Object.keys(validators).map((v) => result[v] = { isValid: true, msg: '' });
  return result;
}
export default useErrors;
import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberInput() {
  const [numberValue, setNumberValue] = useState(0);
  const { saveInputNumber } = useContext(PlanetsContext);

  return (
    <input
      className="input is-success is-rounded is-small"
      type="number"
      data-testid="value-filter"
      placeholder="Digite Um Número"
      value={ numberValue }
      onChange={ ({ target: { value } }) => {
        setNumberValue(value);
        saveInputNumber(value);
      } }
    />
  );
}

export default NumberInput;

import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumberInput() {
  const [numberValue, setNumberValue] = useState(0);
  const { saveInputNumber } = useContext(PlanetsContext);

  return (
    <div className="input_number_box">
      <input
        className="
      input
      is-success
      is-rounded
      is-medium
      is-flex
      mt-2
      has-text-centered
      "
        type="number"
        data-testid="value-filter"
        placeholder="Número"
        value={ numberValue }
        onChange={ ({ target: { value } }) => {
          setNumberValue(value);
          saveInputNumber(value);
        } }
      />
    </div>
  );
}

export default NumberInput;

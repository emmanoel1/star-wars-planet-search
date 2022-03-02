import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function CompareSelector() {
  const { saveCompare } = useContext(PlanetsContext);

  return (
    <div className="select is-primary is-rounded is-medium">
      <select
        data-testid="comparison-filter"
        id="compare"
        onChange={ ({ target: { value } }) => saveCompare(value) }
      >
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
    </div>
  );
}

export default CompareSelector;

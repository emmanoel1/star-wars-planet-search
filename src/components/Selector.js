import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Selector() {
  const { saveColumn, renderColumns } = useContext(PlanetsContext);

  return (
    <div
      className="
      selector2
      select
      is-primary
      is-medium
      "
    >
      <select
        data-testid="column-filter"
        id="column"
        onChange={ ({ target: { value } }) => saveColumn(value) }
      >
        {renderColumns !== undefined ? (
          renderColumns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))
        ) : (
          <div />
        )}
      </select>
    </div>
  );
}

export default Selector;

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Selector() {
  const { saveColumn, renderColumns } = useContext(PlanetsContext);

  return (
    <div className="select is-primary is-rounded is-medium">
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

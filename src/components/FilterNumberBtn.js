import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumberBtn() {
  const { handleFilterBtn } = useContext(PlanetsContext);

  return (
    <button
      className="button is-success is-rounded is-small"
      type="button"
      data-testid="button-filter"
      placeholder="Digite Um Número"
      onClick={ handleFilterBtn }
    >
      Filtrar
    </button>
  );
}

export default FilterNumberBtn;

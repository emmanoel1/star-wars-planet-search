import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterNumberBtn() {
  const { handleFilterBtn } = useContext(PlanetsContext);

  return (
    <button
      className="
      btn
      button
      is-success
      is-rounded
      is-medium
      is-flex
      mt-2
      mb-4
      is-centered
      "
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

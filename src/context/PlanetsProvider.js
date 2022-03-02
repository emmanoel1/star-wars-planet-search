import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useMountPlanets from '../hooks/useMountPlanets';
import filterPlanets from '../services/filterPlanets';
import btnFilterByNumeric from '../services/btnFilterByNumeric';

function PlanetsProvider({ children }) {
  const [planets] = useMountPlanets();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filterNumber, setFilterNumber] = useState(0);
  const [filterCompare, setFilterCompare] = useState('maior que');
  const [filterColumn, setFilterColumn] = useState('population');
  const [renderColumns, setRenderColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  useEffect(() => {
    setFilteredPlanets(planets);
  }, [planets]);

  const planetsContext = {
    renderColumns,
    filteredPlanets,
    filterPlanets: (inputValue) => {
      const updatePlanets = filterPlanets(inputValue, planets);
      setFilteredPlanets(updatePlanets);
    },
    handleFilterBtn: () => {
      const [filtered, column] = btnFilterByNumeric(
        filterColumn, filterNumber, filterCompare, planets,
      );
      setFilteredPlanets(filtered);
      const NEW_ARRAY = renderColumns;
      const index = NEW_ARRAY.indexOf(column);
      NEW_ARRAY.splice(index, 1);
      setRenderColumn(NEW_ARRAY);
    },
    saveInputNumber: (inputNumberValue) => {
      setFilterNumber(inputNumberValue);
    },
    saveCompare: (inputNumberValue) => {
      setFilterCompare(inputNumberValue);
    },
    saveColumn: (inputNumberValue) => {
      setFilterColumn(inputNumberValue);
    },
  };

  return (
    <PlanetsContext.Provider value={ planetsContext }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default PlanetsProvider;

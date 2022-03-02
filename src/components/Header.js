import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import CompareSelector from './CompareSelector';
import FilterNumberBtn from './FilterNumberBtn';
import NumberInput from './NumberInput';
import Selector from './Selector';

function Header() {
  const { filterPlanets } = useContext(PlanetsContext);

  return (
    <header>
      <form>
        <div>
          <Selector />
          <CompareSelector />
          <NumberInput />
          <FilterNumberBtn />
        </div>
        <input
          className="input is-success is-rounded"
          type="text"
          data-testid="name-filter"
          placeholder="Digite Um Planeta de Star Wars"
          onChange={ ({ target: { value } }) => filterPlanets(value) }
        />
      </form>
    </header>
  );
}

export default Header;

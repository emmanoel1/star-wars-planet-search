import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import CompareSelector from './CompareSelector';
import FilterNumberBtn from './FilterNumberBtn';
import NumberInput from './NumberInput';
import Selector from './Selector';
import './style.css';
import starwars from './StarWars.png';

function Header() {
  const { filterPlanets } = useContext(PlanetsContext);

  return (
    <header>
      <form className="form_inputs">
        <div className="img_box">
          <img src={ starwars } alt="star wars movie logo" />
        </div>
        <div className="input_box has-text-centered">
          <div>
            <Selector />
            <CompareSelector />
            <NumberInput />
            <input
              className="
              input2
              input
              is-success
              is-medium
              is-rounded
              mt-2
              mb-2
              ml-2
              "
              type="text"
              data-testid="name-filter"
              placeholder="Digite Um Planeta de Star Wars"
              onChange={ ({ target: { value } }) => filterPlanets(value) }
            />
            <FilterNumberBtn />
          </div>
        </div>
      </form>
    </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const change = useContext(PlanetsContext);
  const { onChange,
    handleChanges, handleClick, column, comparison, values, filtereds } = change;

  return (
    <header>
      <h1>Star Wars Planets Search</h1>
      <input
        data-testid="name-filter"
        onChange={ onChange }
        type="text"
        placeholder="Search"
      />
      <div>
        <label>
          column
          <select
            onChange={ handleChanges }
            name="column"
            value={ column }
            data-testid="column-filter"
          >
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label>
          Operador
          <select
            onChange={ handleChanges }
            name="comparison"
            value={ comparison }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label>
          <input
            onChange={ handleChanges }
            data-testid="value-filter"
            name="values"
            value={ values }
            type="number"
          />
        </label>
        <button onClick={ handleClick } type="button" data-testid="button-filter">
          Filtrar
        </button>
        <div>
          {filtereds.length > 0 ? filtereds.map((filter, index) => (
            <p key={ index }>{filter}</p>
          )) : null}
        </div>
      </div>
    </header>
  );
}

export default Search;

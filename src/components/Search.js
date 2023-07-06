import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const change = useContext(PlanetsContext);
  const { onChange,
    handleChanges,
    handleClick,
    column, comparison, values, filtereds, removeFilter, removeAllFilter } = change;

  const options = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const verifyFiltereds = filtereds.map((filter) => filter.split(' ')[0]);

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
            {options.map((option) => (
              !verifyFiltereds.includes(option) && (
                <option key={ option } value={ option }>
                  {option}
                </option>
              )
            ))}
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
        <button
          data-testid="button-remove-filters"
          onClick={ removeAllFilter }
        >
          Remover Filtros

        </button>
        <div>
          {filtereds.length > 0 ? filtereds.map((filter, index) => (
            <p data-testid="filter" key={ index }>
              {filter}
              {' '}
              <button onClick={ () => removeFilter(filter) }>Remover Filtro</button>
            </p>

          )) : null}
        </div>
      </div>
    </header>
  );
}

export default Search;

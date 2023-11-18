import React, { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoTrashSharp } from 'react-icons/io5';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const planets = useContext(PlanetsContext);
  const { data, planetsFilt } = planets;
  const change = useContext(PlanetsContext);
  const { onChange,
    handleChanges,
    handleClick,
    column,
    comparison,
    values,
    filtereds,
    removeFilter,
    removeAllFilter,
    onChangeSort,
    handleClickSort } = change;

  const options = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const verifyFiltereds = filtereds.map((filter) => filter.split(' ')[0]);
  return (
    <div className="container-planets">
      <div className="search">
        <input
          data-testid="name-filter"
          onChange={ onChange }
          type="text"
          className="input-search"
        />
        <button className="btn-search">{FiSearch() }</button>
      </div>
      <div className="filter">
        <label>
          column
          <select
            onChange={ handleChanges }
            name="column"
            value={ column }
            data-testid="column-filter"
            className="column"
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
            className="operator"
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
            className="number-input"
          />
        </label>
        <button
          className="btn-filter"
          onClick={ handleClick }
          type="button"
          data-testid="button-filter"
        >
          Filtrar
        </button>
        <button
          data-testid="button-remove-filters"
          onClick={ removeAllFilter }
          className="remove-filter"
        >
          Remover Filtros

        </button>
        <label>
          Ordenar
          <select
            data-testid="column-sort"
            onChange={ onChangeSort }
            name="column2"
            className="order-input"
          >
            {options.map((option) => (
              (
                <option key={ option } value={ option }>
                  {option}
                </option>
              )
            ))}
          </select>
        </label>
        <div className="sorted">
          <label>
            <input
              type="radio"
              data-testid="column-sort-input-asc"
              name="sort"
              value="ASC"
              onChange={ onChangeSort }
            />
            Ascendente
          </label>
          <label>
            <input
              type="radio"
              data-testid="column-sort-input-desc"
              name="sort"
              onChange={ onChangeSort }
              value="DESC"
            />
            Descendente
          </label>
        </div>
        <button
          onClick={ handleClickSort }
          data-testid="column-sort-button"
          className="btn-order"
        >
          {' '}
          Ordenar
          {' '}

        </button>
      </div>
      <div className="filtereds">
        {filtereds.length > 0 ? filtereds.map((filter, index) => (
          <p data-testid="filter" key={ index }>
            {filter}
            {' '}
            <button onClick={ () => removeFilter(filter) }>{ IoTrashSharp() }</button>
          </p>

        )) : null}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { planetsFilt.length > 0 ? planetsFilt.map((planet, index) => (
            <tr key={ index }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
            : data.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <hr />
                <td>{planet.rotation_period}</td>
                <hr />
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
=                  <td>{planet.films}</td>
=                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  );
}

export default Table;

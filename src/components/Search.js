import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const change = useContext(PlanetsContext);
  const { onChange } = change;
  return (
    <header>
      <h1>Star Wars Planets Search</h1>
      <input
        data-testid="name-filter"
        onChange={ onChange }
        type="text"
        placeholder="Search"
      />
    </header>
  );
}

export default Search;

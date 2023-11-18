import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import logo from '../img/logo.png';
import Header from './Header';

function Search() {
  const data = useContext(PlanetsContext);
  return (

    <section>
      <div className="container-title">
        <div className="border1">
          <div className="border2">
            <img src={ logo } />
            <Header />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;

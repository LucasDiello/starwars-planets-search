import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const results = await response.json();
      setPlanets(results.results);
    };
    fetchPlanets();
  }, []);

  return (
    <planetsContext.Provider value={ { data: planets } }>
      <div>
        {children}
      </div>
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

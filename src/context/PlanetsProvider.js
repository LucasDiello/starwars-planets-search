import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFilt, setPlanetsFilt] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const results = await response.json();
      setPlanets(results.results);
    };
    fetchPlanets();
  }, []);

  const onChange = ({ target }) => {
    const { value } = target;
    const filt = planets.filter((planet) => planet.name.toLowerCase().includes(value));
    console.log(filt);
    setPlanetsFilt(filt);
  };

  return (
    <planetsContext.Provider
      value={ { data: planets,
        planetsFilt,
        onChange } }
    >
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

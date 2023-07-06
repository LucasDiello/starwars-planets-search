import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [planetsFilt, setPlanetsFilt] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [values, setValues] = useState(0);
  const [filtereds, setFiltereds] = useState([]);
  const [column2, setColumn2] = useState('population');
  const [sortd, setSort] = useState('');
  const [planetSort, setPlanetSort] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const results = await response.json();
      setPlanets(results.results);
    };
    fetchPlanets();
  }, []);

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    if (name === 'column') {
      setColumn(value);
    }
    if (name === 'comparison') {
      setComparison(value);
    }
    if (name === 'values') {
      setValues(value);
    }
  };

  const handleClick = () => {
    setFiltereds([...filtereds, `${column} ${comparison} ${values}`]);
  };

  const handleClickSort = () => {
    const allPlanets = planets;
    const ASCNUM = 1231231231231211;
    const DESCNUM = 0;

    const filt = allPlanets.sort((a, b) => {
      const valA = a[column2] === 'unknown' ? DESCNUM : a[column2];
      const valB = b[column2] === 'unknown' ? DESCNUM : b[column2];
      const valueA = a[column2] === 'unknown' ? ASCNUM : a[column2];
      const valueB = b[column2] === 'unknown' ? ASCNUM : b[column2];
      if (sortd === 'ASC') {
        return valueA - valueB;
      }
      if (sortd === 'DESC') {
        return valB - valA;
      }
      return 0;
    }); setPlanetSort(filt);
  };

  useEffect(() => {
    let filt = planets;

    filtereds.forEach((filter) => {
      const [columnFilt, compFilt] = filter.split(' ');
      const value = filter.split(' ')[3];
      if (compFilt === 'maior') {
        filt = filt.filter((planet) => Number(planet[columnFilt]) > Number(value));
      }
      if (compFilt === 'menor') {
        filt = filt.filter((planet) => Number(planet[columnFilt]) < Number(value));
      }
      if (compFilt === 'igual') {
        filt = filt.filter((planet) => Number(planet[columnFilt]) === Number(value));
      }
    });

    setColumn('population');
    setComparison('maior que');
    setValues(0);
    setPlanetsFilt(filt);
  }, [filtereds, planets]);

  const removeFilter = (filter) => {
    const newFiltered = filtereds.filter((filt) => filt !== filter);
    setFiltereds(newFiltered);
  };

  const removeAllFilter = () => {
    setFiltereds([]);
  };

  const onChange = ({ target }) => {
    const { value } = target;

    const filt = planets.filter((planet) => planet.name.toLowerCase().includes(value));
    setPlanetsFilt(filt);
  };

  const onChangeSort = ({ target }) => {
    const { value, name } = target;
    console.log('lucas');
    if (value === 'ASC') {
      console.log('ativei asc');
      setSort(value);
    }
    if (value === 'DESC') {
      console.log('ativei desc');
      setSort(value);
    }
    if (name === 'column2') {
      setColumn2(value);
    }

    console.log(value);
  };
  return (
    <planetsContext.Provider
      value={ {
        data: planets,
        order: {
          column: column2,
          sort: sortd,
        },
        planetsFilt,
        column,
        comparison,
        values,
        filtereds,
        planetSort,
        handleClickSort,
        onChangeSort,
        removeAllFilter,
        removeFilter,
        handleClick,
        handleChanges,
        onChange,
      } }
    >
      <div>{children}</div>
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;

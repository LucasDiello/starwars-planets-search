import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const data = useContext(PlanetsContext);
  return (
    <div>{console.log(data)}</div>
  )
}

export default Header
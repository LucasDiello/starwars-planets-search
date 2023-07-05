import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Search from './components/Search';

function App() {
  return (
    <PlanetsProvider>
      <Search />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

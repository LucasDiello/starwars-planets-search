import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Star Wars Planets Search/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('performs filtering and removes filters', () => {
    render(<App />);
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');
    const filterButton = screen.getByTestId('button-filter');
    const removeFilterButton = screen.getByText(/Remover Filtros/i);
    const removeAllFiltersButton = screen.getByTestId('button-remove-filters');


    fireEvent.change(columnSelect, { target: { value: 'diameter' } });
    fireEvent.change(comparisonSelect, { target: { value: 'maior que' } });
    fireEvent.change(valueInput, { target: { value: '10000' } });

    fireEvent.click(filterButton);

    // Verify filters are applied
    expect(screen.queryByText(/Alderaan/i)).not.toBeInTheDocument();
    
    // Remove filters
    fireEvent.click(removeFilterButton);

    // Verify filters are removed
    expect(screen.queryByText(/Alderaan/i)).not.toBeInTheDocument();

    fireEvent.click(removeAllFiltersButton);

    // Verify filters are removed
    expect(screen.queryByText(/Alderaan/i)).not.toBeInTheDocument();
  });
  
  // Write more tests to cover other functionalities and edge cases
  test('Verifica se o input de texto está na tela', () => {
    render(<App />);
    const inputElement = screen.getByTestId('name-filter');
    expect(inputElement).toBeInTheDocument();
  });
});

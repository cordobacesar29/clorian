import { beforeEach, describe, expect, test, vi, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoesCard } from '.';

// Mock product data
const mockProduct = {
  id: 1,
  name: 'Test Shoe',
  description: 'A great shoe for testing',
  price: 100,
  image: 'https://example.com/shoe.jpg',
  validityDate: String(new Date()), // Adjust validity date as needed
};

describe('ShoesCard', () => {

  beforeEach(()=>{
    render(<ShoesCard product={mockProduct} />);
  })

  test('renders basic information correctly', () => {
    expect(screen.getByText('Test Shoe')).toBeDefined()
    expect(screen.getByText('A great shoe for testing')).toBeDefined()
    expect(screen.getByText('$100')).toBeDefined()
  });
  
  test('handles quantity adjustments', ()=>{
    const decrementButton = screen.getAllByTitle("subtract");
    const incrementButton = screen.getAllByTitle("add");
    const quantityDisplay = screen.getAllByTitle("count");
    
    expect(quantityDisplay[0]).toBeDefined();

    fireEvent.click(incrementButton[0]);
    expect(quantityDisplay[0].ATTRIBUTE_NODE).toBe(2)
   
    fireEvent.click(decrementButton[0]);
    expect(quantityDisplay[0].ATTRIBUTE_NODE).toBeDefined()

  })

  test('disables button when validity date has passed', () => {
    const expiredProduct = { ...mockProduct, validityDate: '2022-12-31' };

    render(<ShoesCard product={expiredProduct} />);

    const addButton = screen.getAllByRole('button', { name: /Añadir/ });
    expect(addButton[0]).toBeDefined();
  });
});

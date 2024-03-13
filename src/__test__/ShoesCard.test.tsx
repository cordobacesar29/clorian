import { render, screen, fireEvent } from '@testing-library/react';
import { ShoesCard } from '../components/card';

describe('ShoesCard', () => {
  const product = {
    id: 1,
    name: 'Example Shoes',
    description: 'Lorem ipsum dolor sit amet',
    price: 50,
    image: 'example.jpg',
    validityDate: '2023-01-30',
  };

  test('renders product information correctly', () => {
    render(<ShoesCard product={product} />);
    
    expect(screen.getByText('Example Shoes')).toBeTruthy();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(screen.getByText('$50')).toBeTruthy();
  });

  test('increments and decrements count correctly', () => {
    render(<ShoesCard product={product} />);
    
    const decrementButton = screen.getByTestId('decrement-button');
    const incrementButton = screen.getByTestId('increment-button');
    const countDisplay = screen.getByText('1');

    fireEvent.click(incrementButton);
    expect(countDisplay).toMatch('2');

    fireEvent.click(decrementButton);
    expect(countDisplay).toMatch('1');
  });

  test('adds product to cart correctly', () => {
    const addProductToCart = jest.fn();
    render(<ShoesCard product={product} />);

    const addButton = screen.getByText('Añadir');
    fireEvent.click(addButton);

    expect(addProductToCart).toHaveBeenCalledWith(1, 1);
  });
});

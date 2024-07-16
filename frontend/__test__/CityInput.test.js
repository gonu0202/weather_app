import { render, fireEvent } from '@testing-library/react';
import CityInput from './CityInput';

test('CityInput calls getWeather with city name', () => {
  const getWeather = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <CityInput getWeather={getWeather} />
  );

  fireEvent.change(getByPlaceholderText('Enter city name'), {
    target: { value: 'London' },
  });
  fireEvent.click(getByText('Get Weather'));

  expect(getWeather).toHaveBeenCalledWith('London');
});

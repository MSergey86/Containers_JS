import ErrorRepository from '../ErrorRepositoryMap';

const err = new ErrorRepository();

test('Input data error', () => {
  const expResult = 'Oшибка входных данных';
  const result = err.translate(5456);
  expect(result).toBe(expResult);
});

test('Invalid address', () => {
  const expResult = 'Неправильный адрес';
  const result = err.translate(10);
  expect(result).toBe(expResult);
});

test('Unknown error', () => {
  const expResult = 'Unknown error';
  const result = err.translate(54);
  expect(result).toBe(expResult);
});

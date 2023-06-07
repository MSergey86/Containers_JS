import Character from '../Character';
import Team from '../TeamSet';

const team = new Team();
const mag = new Character('маг', 'WhiteMag');
const mag2 = new Character('маг2', 'WhiteMag');
const arrMags = [
  mag, mag2, mag2,
];

test('add without error', () => {
  expect(() => {
    team.add(mag);
    team.add(mag2);
  }).not.toThrow();
});

test('add with error', () => {
  expect(() => {
    team.add(mag2);
  }).toThrow('Этот герой уже существует в команде');
});

test('addAll', () => {
  expect(() => {
    team.addAll(arrMags);
  }).not.toThrow();
});

test('To Array', () => {
  const result = team.toArray();
  expect(result).toEqual([mag, mag2]);
});

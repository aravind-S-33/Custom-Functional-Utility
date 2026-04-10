import { map } from '../src/foundation/map';

test('map doubles values', () => {
  const input = [1, 2, 3];
  const result = map(x => x * 2, input);

  expect(result).toEqual([2, 4, 6]);
  expect(input).toEqual([1, 2, 3]); // immutability
});
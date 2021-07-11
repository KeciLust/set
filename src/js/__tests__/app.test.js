import Team from '../app';

const team = new Team();

test('add Team true', () => {
  team.add(1);
  expect(team.members.has(1)).toBeTruthy();
});
test('add Team error', () => {
  expect(() => team.add(1)).toThrow('Такой персонаж уже есть!');
});
test('addAll Team true', () => {
  team.addAll(1, 2, 3, 4, 5);
  expect(team.members.has(4)).toBeTruthy();
});
test('toArray Team', () => {
  expect(team.toArray()).toEqual([1, 2, 3, 4, 5]);
});

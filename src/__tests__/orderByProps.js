import orderByProps from '../orderByProps';

test('test1 orderByProps function', () => {
  const person = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(person, ['name', 'level']);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }]);
});

test('test2 orderByProps function', () => {
  const person = {
    name: 'John', lastName: 'Smith', age: 30, male: 'male', education: 'university education',
  };
  const result = orderByProps(person, ['male', 'education', 'name']);
  expect(result).toEqual([
    { key: 'name', value: 'John' },
    { key: 'male', value: 'male' },
    { key: 'education', value: 'university education' },
    { key: 'age', value: 30 },
    { key: 'lastName', value: 'Smith' }]);
});

test('test3 orderByProps function', () => {
  const person = {
    name: 'John', lastName: 'Smith', age: 30,
  };
  const result = orderByProps(person, []);
  expect(result).toEqual([
    { key: 'age', value: 30 },
    { key: 'lastName', value: 'Smith' },
    { key: 'name', value: 'John' }]);
});

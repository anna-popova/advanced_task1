export default function orderByProps(obj, [key1, key2]) {
  // Сохранить список ключех исходного объекта (Object.keys)
  const allKeysArr = Object.keys(obj);

  // Отфильтровать ключи, которые не нужно сортировать (Array.prototype.filter)
  const givenKeysArr = allKeysArr.filter((item) => item === key1 || item === key2);

  // Отсортировать ключи, которые нужно сортировать: (Array.prototype.sort)
  const sortedKeysArr = allKeysArr.filter((item) => item !== key1 && item !== key2).sort();

  // Объединить массив, пройтись по нему (Array.prototype.map) и дать ответ
  const resulrkeysArr = [...givenKeysArr, ...sortedKeysArr];
  const result = resulrkeysArr.map((item) => ({ key: item, value: obj[item] }));
  return result;
}

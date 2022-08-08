const person = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

function orderByProps(obj, [key1, key2]) {
  const resultArr1 = [];

  resultArr1.push({ key: key1, value: obj[key1] });
  resultArr1.push({ key: key2, value: obj[key2] });
  console.log(resultArr1);

  // let check1 = resultArr1[0].key.includes(key1);
  // let check2 = resultArr1[1].key.includes(key2);
  // console.log(check1);
  // console.log(check2);

  const resultArr2 = [];

  for (const key in obj) {
    // не могу понянть, почему конструкция if ниже не срабатывает.
    // как мне добавить в массив только те свойства, которых нет в resultArr1 ???
    if (!resultArr1[0].key.includes(key1) || !resultArr1[1].key.includes(key2)) {
      resultArr2.push({ key, value: obj[key] });
      resultArr2.sort((a, b) => (a.key > b.key ? 1 : -1));
    }
  }
  console.log(resultArr2);

  return [...resultArr1, ...resultArr2];
}

console.log(orderByProps(person, ['name', 'level']));

// [
//   {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//   {key: "level", value: 2}, // порядок взят из массива с ключами
//   {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//   {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//   {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
// ]

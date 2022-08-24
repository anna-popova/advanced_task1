function orderByProps(obj, props) {
  const propsArr = [];
  const sortArr = [];

  for (const key in obj) {
    if (props.includes(key)) {
      propsArr.push({key, value: obj[key],});
    } else {
      sortArr.push({key, value: obj[key],});
    }
  }
  // console.log(propsArr);
  // console.log(sortArr);

  sortArr.sort((a, b) => a.key > b.key ? 1 : -1);
  // console.log(sortArr);
  
  return [...propsArr, ...sortArr];
}

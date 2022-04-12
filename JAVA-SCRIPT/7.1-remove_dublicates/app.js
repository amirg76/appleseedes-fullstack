function duplicate(array) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) && newArr.indexOf(array[i]) === -1)
      newArr.push(array[i]);
  }
  return newArr;
}
console.log(duplicate([3, 4, 4, 3, 6, 3]));

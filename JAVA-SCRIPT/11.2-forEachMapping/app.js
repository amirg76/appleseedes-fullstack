const arrIntger = [1, 2, 4, 6, 6, 8, 8, 9];

// .1
function doubleValues(array) {
  return duplicate(array);
}

function duplicate(array) {
  const newArr = [];
  array.forEach(function (e) {
    if (Number.isInteger(e) && newArr.indexOf(e) === -1) newArr.push(e);
  });
  return newArr;
}

console.log(doubleValues(arrIntger));

// .2
function onlyEvenValues(array) {
  const newArr = [];
  array.map(function (e) {
    if (Number.isInteger(e) && e % 2 === 0) newArr.push(e);
  });
  return newArr;
}
console.log(onlyEvenValues(arrIntger));

// .3
function showFirstAndLast(array) {
  const newArr = [];
  array.map(function (e) {
    if (typeof e === "string") newArr.push(e);
  });
  return [
    ...newArr.slice(0, 1),
    ...newArr.slice(newArr.length - 1, newArr.length),
  ];
}
const arrString = ["abv", "hello", 5, "yuhg", "gjk", 4, "ghop", 7];
console.log(showFirstAndLast(arrString));

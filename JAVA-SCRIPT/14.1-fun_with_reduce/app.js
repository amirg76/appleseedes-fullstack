arrNumbers = [2, 3, 6, 8, 10, 70, 34, 41, 55, 60];

const max = arrNumbers.reduce((acc, val) => {
  return Math.max(acc, val);
});
console.log(max);

const sumOfEven = arrNumbers.reduce((acc, val) => {
  if (val % 2 === 0) acc += val;
  return acc;
}, 0);

console.log(sumOfEven);

const average = arrNumbers.reduce((acc, val) => {
  acc += val;
  if (arrNumbers.indexOf(val) === arrNumbers.length - 1)
    return acc / arrNumbers.length;
  return acc;
}, 0);

console.log(average);

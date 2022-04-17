const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.
const foodsAscending = foods.slice().sort();

const foodsDescending = foods.slice().sort(function (a, b) {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
});

console.log(foodsAscending);
console.log(foodsDescending);
// -------------------------

// b.
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//b.1
const foodsWithUpperCaseDescending = foodsWithUpperCase
  .slice()
  .sort(function (a, b) {
    if (a.toLowerCase() > b.toLowerCase()) {
      return -1;
    }
    if (b.toLowerCase() > a.toLowerCase()) {
      return 1;
    }
    return 0;
  });

console.log(foodsWithUpperCaseDescending);

// b.2

const foodsWithUpperCaseAscending = foodsWithUpperCase
  .slice()
  .sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (b.toLowerCase() < a.toLowerCase()) {
      return 1;
    }
    return 0;
  });
console.log(foodsWithUpperCaseAscending);
//-----------------------------------------
// c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//c.1
const longestWord = words.slice().sort(function (a, b) {
  if (a.length > b.length) {
    return -1;
  }
  if (b.length > a.length) {
    return 1;
  }
  return 0;
});
console.log(longestWord);

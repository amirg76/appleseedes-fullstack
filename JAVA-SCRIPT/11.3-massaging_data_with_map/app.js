const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1.
function arrayName(array) {
  return array.map((e) => e.name);
}
console.log(arrayName(data));
// 2.
function arrayBorn(array) {
  let newArr = [];
  array.forEach((e) => {
    let birthdayShort = e.birthday.slice(
      e.birthday.length - 4,
      e.birthday.length
    );
    if (birthdayShort > 1990) newArr.push(e);
  });
  return newArr;
}
const born = arrayBorn(data);
console.log(...born);
// 3.
function arrayFoods(array) {
  let objArr = [];
  let foodObj = {};
  let sum = 0;
  array.forEach((e) => {
    let outsideObj = Object.values(e.favoriteFoods);
    let insideObj = Object.values(outsideObj);

    insideObj.forEach(function (highe) {
      highe.forEach(function (smalle) {
        objArr.push(smalle);
      });
    });
  });

  for (i = 0; i < objArr.length; i++) {
    if (!foodObj[objArr[i]]) {
      foodObj[objArr[i]] = 1;
    } else foodObj[objArr[i]]++;
  }

  return foodObj;
}
const allFoods = arrayFoods(data);
console.log(allFoods);

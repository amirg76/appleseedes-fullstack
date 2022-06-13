const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];

const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};

const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

const food = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    el.favoriteFoods.forEach((foodObj) => {
      console.log(foodObj);
      foodObj.meats.forEach((meatItem) => {
        console.log();
        // obj[meatItem] = obj[meatItem] + 1 || 1;
      });
      foodObj.fish.forEach((fishItem) => {
        obj[fishItem] = obj[fishItem] + 1 || 1;
      });
    });
  });

  return obj;
};

console.log(food(data));
debugger;
//TypeError: foodObj.forEach is not a function
// at D:\fullstack-course\exercise\appleseedes-fullstack\Node.js\debugging\debugging.js:75:15

//break in debugging.js:74
//  72   arr.forEach((el) => {
//   73     el.favoriteFoods.forEach((foodObj) => {
//  >74       console.log(foodObj);
//   75       foodObj.forEach((meatItem) => {
//   76         console.log();
//  break in node:internal/console/constructor:360
//   358 const consoleMethods = {
//   359   log(...args) {
//  >360     this[kWriteToConsole](kUseStdout, this[kFormatForStdout](args));
//   361   },

// foodObj is obj and not array cant use forEach;
// need to use foodObj.meats

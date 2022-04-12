const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compare(food, food1) {
  let returnArr = [];
  for (let i = 0; i < food.length; i++) {
    for (let j = 0; j < food1.length; j++) {
      if (food[i] === food1[j]) returnArr.push(food[i]);
    }
  }

  return returnArr.length > 0 ? returnArr : false;
}
console.log(compare(food, food1));

const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1.
function getCandy(candyStore, id) {
  // const asArray = Object.entries(candyStore);
  // const firstArr = Object.values(asArray[0][1]);
  // const justStrings = firstArr.find((x) => x.id === id);
  const justStrings = candyStore.candies.find((x) => x.id === id);
  return justStrings;
}
const candyWithId = getCandy(candyStore, "5hd7y");
console.log(candyWithId);

// 2.
function getPrice(candyStore, id) {
  // const asArray = Object.entries(candyStore);
  // const firstArr = Object.values(asArray[0][1]);
  // const justStrings = firstArr.find((x) => x.id === id);
  const justStrings = candyStore.candies.find((x) => x.id === id);
  return justStrings.price;
}
const getPriceWithId = getPrice(candyStore, "as12f");
console.log(getPriceWithId);

// 3.
function addCandy(candyStore, id, name, price) {
  let obj = { name: name, id: id, price: price, amount: 1 };
  candyStore.candies[2] = obj;

  console.log(candyStore);
}
const addNewCandy = addCandy(candyStore, "yt45e", "snickers", 3);

// 4.

function buy(candyStore, id) {
  //your code
  let candySelect = candyStore.candies.find((x) => x.id === id);
  candyStore.cashRegister += candySelect.price;
  candySelect.amount--;

  console.log(candyStore);
}

const buyCandy = buy(candyStore, "yt45e");

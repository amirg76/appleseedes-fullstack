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
  const asArray = Object.entries(candyStore);
  const firstArr = Object.values(asArray[0][1]);
  const justStrings = firstArr.find((x) => x.id === id);

  return justStrings;
}
const candyWithId = getCandy(candyStore, "as12f");
console.log(candyWithId);
